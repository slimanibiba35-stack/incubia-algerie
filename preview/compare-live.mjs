// Compares every page of the rebuilt site with the live site: visible text, page height, and a pixel diff
// of full-page screenshots (1440 px wide). Pages are scrolled to the bottom first so that the live site's
// scroll-triggered animations have run.
// Usage: node preview/compare-live.mjs <localBase> [route ...]    -> preview/screenshots/compare/
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, 'screenshots', process.env.REF ? 'vs-preview' : 'compare');
fs.mkdirSync(OUT, { recursive: true });
// REF=http://localhost:4000 compares against the approved preview (node preview/server.js) instead of live.
const LIVE = process.env.REF || 'https://www.incubia-algerie.com';
const [localBase, ...only] = process.argv.slice(2);
const WIDTH = Number(process.env.W || 1440);
const routes = only.length ? only : fs.readFileSync(path.join(HERE, 'live-snapshot', '_routes.tsv'), 'utf8')
  .split('\n').map(l => l.split('\t')).filter(([r, s]) => r && s === '200' && !r.includes('#')).map(([r]) => r);

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const port = 9300 + Math.floor(Math.random() * 500);
const edge = spawn(EDGE, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${fs.mkdtempSync(path.join(tmpdir(), 'edge-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let tabs;
for (let i = 0; i < 40 && !tabs; i++) { try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', e => { const m = JSON.parse(e.data); pending.get(m.id)?.(m.result); });
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const evalJs = async expr => (await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }))?.result?.value;

const mobile = WIDTH < 768;
await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: 900, deviceScaleFactor: 1, mobile });
await send('Page.enable');

async function capture(url, file) {
  await send('Page.navigate', { url });
  await sleep(4000);
  // scroll through the page to trigger whileInView animations, then back to top
  await evalJs(`(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,120))}scrollTo(0,0);await new Promise(r=>setTimeout(r,1500));})()`);
  const info = await evalJs(`({h: document.documentElement.scrollHeight, text: (document.querySelector('main')||document.body).innerText.replace(/\\s+/g,' ').trim(), imgs: [...document.images].filter(i=>i.naturalWidth===0 && i.loading!=='lazy').map(i=>i.src)})`);
  const h = Math.min(info.h, 16000);
  if (process.env.STITCH) { await stitch(file, h); return info; }
  await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: h, deviceScaleFactor: 1, mobile });
  await sleep(800);
  const { data } = await send('Page.captureScreenshot', { format: 'png' });
  await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: 900, deviceScaleFactor: 1, mobile });
  fs.writeFileSync(file, Buffer.from(data, 'base64'));
  return info;
}

// STITCH=1: keeps the 900 px window and stitches one screenshot per scroll step, so sections sized in vh
// (live hero, pinned services rail) look as a visitor sees them. The sticky header and the WhatsApp button
// are shown on the first tile only.
async function stitch(file, total) {
  const tiles = [];
  const css = s => `(()=>{let t=document.getElementById('__cap');if(!t){t=document.createElement('style');t.id='__cap';document.head.append(t)}t.textContent=${JSON.stringify(s)}})()`;
  // Sticky headings would repeat on every tile: keep them in place for the capture.
  const unstick = '.ip-method-head, #faq.ip-faq .text-center { position: static !important; }';
  await evalJs(css(unstick));
  for (let y = 0; y < total; y += 900) {
    await evalJs(`scrollTo(0, ${y})`);
    await sleep(450);
    if (y > 0) await evalJs(css(unstick + ' header, header *, .ip-wa-float, .ip-wa-float * { visibility: hidden !important; transition: none !important; }'));
    const top = await evalJs('Math.round(scrollY)');
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    tiles.push({ input: Buffer.from(data, 'base64'), left: 0, top });
  }
  await evalJs(`document.getElementById('__cap')?.remove(); scrollTo(0, 0)`);
  const height = Math.max(...tiles.map(t => t.top)) + 900;
  await sharp({ create: { width: WIDTH, height, channels: 3, background: '#ffffff' } }).composite(tiles).png().toFile(file);
}

async function diff(a, b) {
  const ma = await sharp(a).metadata(), mb = await sharp(b).metadata();
  const w = Math.min(ma.width, mb.width), h = Math.min(ma.height, mb.height);
  const ra = await sharp(a).extract({ left: 0, top: 0, width: w, height: h }).raw().toBuffer();
  const rb = await sharp(b).extract({ left: 0, top: 0, width: w, height: h }).raw().toBuffer();
  const ch = ra.length / (w * h);
  let bad = 0;
  for (let i = 0; i < ra.length; i += ch) {
    if (Math.abs(ra[i] - rb[i]) + Math.abs(ra[i + 1] - rb[i + 1]) + Math.abs(ra[i + 2] - rb[i + 2]) > 60) bad++;
  }
  return (100 * bad / (w * h)).toFixed(1);
}

function textDiff(a, b) {
  if (a === b) return 'same';
  const wa = a.split(' '), wb = b.split(' ');
  let i = 0; while (i < wa.length && wa[i] === wb[i]) i++;
  return `differs at word ${i}: live «${wa.slice(i, i + 12).join(' ')}» vs local «${wb.slice(i, i + 12).join(' ')}»`;
}

const rows = [];
for (const r of routes) {
  const slug = (r === '/' ? 'home' : r.slice(1).replace(/\//g, '_')) + `-${WIDTH}`;
  const fl = path.join(OUT, `${slug}-live.png`), fn = path.join(OUT, `${slug}-local.png`);
  try {
    const live = await capture(LIVE + r, fl);
    const loc = await capture(localBase + r, fn);
    const px = await diff(fl, fn);
    rows.push(`${r.padEnd(46)} h ${String(live.h).padStart(5)}/${String(loc.h).padEnd(5)} px-diff ${px.padStart(5)}%  text: ${textDiff(live.text, loc.text)}${loc.imgs.length ? '  BROKEN IMG: ' + loc.imgs.join(' ') : ''}`);
  } catch (e) { rows.push(`${r} ERROR ${e.message}`); }
  console.log(rows.at(-1));
}
fs.writeFileSync(path.join(OUT, `report-${WIDTH}.txt`), rows.join('\n') + '\n');
ws.close(); edge.kill(); process.exit(0);
