// Saves a snapshot of every page of the live site (HTML), used as the reference to rebuild
// pages missing from this repo. Run: node preview/crawl-live.mjs  -> preview/live-snapshot/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const LIVE = 'https://www.incubia-algerie.com';
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'live-snapshot');
fs.mkdirSync(OUT, { recursive: true });

const seen = new Set();
// Pages in the live sitemap (or answering 200) that no live page links to.
const queue = ['/', '/ressources', '/partenaires', '/reservation-formation', '/services/publicite-digitale'];
const skip = /^\/(_next|api)\/|\.(png|jpe?g|svg|webp|ico|xml|txt|pdf|css|js|woff2?)$/i;
const report = [];

while (queue.length) {
  const p = queue.shift();
  if (seen.has(p)) continue;
  seen.add(p);
  let res;
  try { res = await fetch(LIVE + p, { redirect: 'manual', headers: { 'user-agent': 'Mozilla/5.0 incubia-snapshot' } }); }
  catch (e) { report.push(`${p}\tERR ${e.message}`); continue; }
  if (res.status >= 300 && res.status < 400) {
    const loc = (res.headers.get('location') || '').replace(/^https?:\/\/(www\.)?incubia-algerie\.com/, '');
    report.push(`${p}\t${res.status} -> ${loc}`);
    if (loc.startsWith('/') && !seen.has(loc)) queue.push(loc);
    continue;
  }
  const html = await res.text();
  report.push(`${p}\t${res.status}`);
  const file = (p === '/' ? 'index' : p.slice(1).replace(/\//g, '__')) + '.html';
  fs.writeFileSync(path.join(OUT, file), html);
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let l = m[1].replace(/\/$/, '') || '/';
    if (!skip.test(l) && !seen.has(l)) queue.push(l);
  }
  await new Promise(r => setTimeout(r, 250));
}
fs.writeFileSync(path.join(OUT, '_routes.tsv'), report.sort().join('\n') + '\n');
console.log(report.sort().join('\n'));
