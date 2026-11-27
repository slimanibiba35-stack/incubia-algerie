// Mobile screenshots via Edge DevTools device emulation (headless window can't go below ~500px).
// Usage: node preview/shot-mobile.mjs <url> <outFile.png> [heightCss] [widthCss]
// widthCss >= 768 gives a desktop capture (no mobile emulation).
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out, h = '844', wArg = '390'] = process.argv.slice(2);
const width = Number(wArg), mobile = width < 768;
setTimeout(() => { console.error('timeout', url); try { edge.kill(); } catch {} process.exit(1); }, 75000);
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const port = 9300 + Math.floor(Math.random() * 500);
const edge = spawn(EDGE, ['--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'edge-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let tabs;
for (let i = 0; i < 40 && !tabs; i++) { try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r));
let id = 0; const pending = new Map();
ws.addEventListener('message', e => { const m = JSON.parse(e.data); pending.get(m.id)?.(m.result); });
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Emulation.setDeviceMetricsOverride', { width, height: Number(h), deviceScaleFactor: mobile ? 2 : 1, mobile });
if (mobile) await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
await send('Page.enable');
await send('Page.navigate', { url });
await sleep(9000);
// The live site sometimes drops its stylesheet: if the page is unstyled, reload once.
const styled = async () => (await send('Runtime.evaluate', { expression: "getComputedStyle(document.body).fontFamily.includes('Inter')", returnByValue: true }))?.result?.value;
if (!(await styled())) { await send('Page.reload', { ignoreCache: true }); await sleep(9000); if (!(await styled())) console.error('UNSTYLED', url); }
const { data } = await send('Page.captureScreenshot', { format: 'png' });
writeFileSync(out, Buffer.from(data, 'base64'));
console.log(out);
ws.close(); edge.kill();
process.exit(0);
