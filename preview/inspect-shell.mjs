// Shows the body-level structure of each snapshot and whether header/footer markup is shared.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { parseDocument, DomUtils } from 'htmlparser2';
import render from 'dom-serializer';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'live-snapshot');
const h = s => crypto.createHash('md5').update(s).digest('hex').slice(0, 8);
for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.includes('#'))) {
  const doc = parseDocument(fs.readFileSync(path.join(DIR, f), 'utf8'));
  const body = DomUtils.findOne(e => e.name === 'body', doc.children);
  const kids = body.children.filter(c => c.type === 'tag').map(c => c.name + (c.attribs.class ? '.' + c.attribs.class.split(' ')[0] : '') + (c.attribs.id ? '#' + c.attribs.id : ''));
  const header = DomUtils.findOne(e => e.name === 'header', body.children);
  const footer = DomUtils.findOne(e => e.name === 'footer', body.children);
  const main = DomUtils.findOne(e => e.name === 'main', body.children);
  const mainKids = main ? main.children.filter(c => c.type === 'tag').map(c => c.name).join(',') : '-';
  // strip radix ids before hashing
  const norm = n => n ? render(n).replace(/radix-[^"]+/g, '') : '-';
  console.log(f.padEnd(52), 'hdr', h(norm(header)), 'ftr', h(norm(footer)), '| body:', kids.filter(k => !k.startsWith('script')).join(' '), '| main:', mainKids.slice(0, 120));
}
