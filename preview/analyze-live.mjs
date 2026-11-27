// Inventory of the live snapshot: assets, interactive widgets, inline animation styles, head tags.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument, DomUtils } from 'htmlparser2';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'live-snapshot');
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.includes('#'));
const assets = new Set(), styles = new Map(), widgets = {}, heads = {};

for (const f of files) {
  const doc = parseDocument(fs.readFileSync(path.join(DIR, f), 'utf8'));
  const all = DomUtils.findAll(() => true, doc.children);
  const w = new Set();
  for (const el of all) {
    const a = el.attribs || {};
    for (const k of ['src', 'srcset', 'href', 'poster']) {
      const v = a[k]; if (!v) continue;
      for (const part of v.split(',')) {
        let u = part.trim().split(/\s+/)[0];
        const m = u.match(/\/_next\/image\?url=([^&]+)/); if (m) u = decodeURIComponent(m[1]);
        if (/^\/(?!_next)[^?#]*\.(png|jpe?g|webp|svg|gif|ico|mp4|pdf|avif)$/i.test(u) || /^https?:\/\//.test(u) && /\.(png|jpe?g|webp|svg|gif|mp4|pdf|avif)/i.test(u)) assets.add(u);
      }
    }
    if (a.style && /opacity|transform/.test(a.style)) styles.set(a.style, (styles.get(a.style) || 0) + 1);
    if (a.style) for (const m of a.style.matchAll(/url\(([^)]+)\)/g)) assets.add(m[1].replace(/["']/g, ''));
    if (el.name === 'form') w.add(`form action=${a.action || '-'}`);
    if (el.name === 'input' || el.name === 'textarea' || el.name === 'select') w.add('form-fields');
    if (a['data-state']) w.add(`data-state:${a['data-slot'] || a.role || el.name}`);
    if (a['aria-expanded'] !== undefined) w.add(`aria-expanded:${a['data-slot'] || el.name}`);
    if (a.role === 'tablist') w.add('tabs');
    if (el.name === 'iframe') w.add(`iframe ${a.src}`);
    if (el.name === 'video') w.add('video');
    if (el.name === 'button' && !a['aria-haspopup']) w.add('button');
  }
  widgets[f] = [...w];
  const head = DomUtils.findOne(e => e.name === 'head', doc.children);
  heads[f] = {
    title: DomUtils.textContent(DomUtils.findOne(e => e.name === 'title', head.children) || { children: [] }),
    desc: DomUtils.findOne(e => e.name === 'meta' && e.attribs.name === 'description', head.children)?.attribs.content,
    canonical: DomUtils.findOne(e => e.name === 'link' && e.attribs.rel === 'canonical', head.children)?.attribs.href,
    ld: DomUtils.findAll(e => e.name === 'script' && e.attribs.type === 'application/ld+json', doc.children).length,
  };
}
console.log('ASSETS\n' + [...assets].sort().join('\n'));
console.log('\nANIM STYLES'); for (const [s, n] of [...styles].sort((a, b) => b[1] - a[1]).slice(0, 25)) console.log(n, s);
console.log('\nWIDGETS'); for (const [f, w] of Object.entries(widgets)) console.log(f, '::', w.join(' | '));
console.log('\nHEADS'); for (const [f, h] of Object.entries(heads)) console.log(f, '::', JSON.stringify(h));
