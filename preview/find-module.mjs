// Prints the compiled live-site module that contains a given text, with one JSX call per line.
// Usage: node preview/find-module.mjs "S'Inscrire" [out-file]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'live-snapshot', 'js');
const needle = process.argv[2];
const out = process.argv[3];
const res = [];
for (const f of fs.readdirSync(DIR)) {
  const js = fs.readFileSync(path.join(DIR, f), 'utf8');
  let i = js.indexOf(needle);
  if (i < 0) continue;
  // Turbopack modules look like `,12345,e=>{"use strict";...}` — find the enclosing one.
  const starts = [...js.matchAll(/[,\[](\d+),(?:\(?[a-z],?[a-z]?\)?|[a-z])=>\{/g)].map(m => m.index);
  const s = starts.filter(x => x < i).pop() ?? 0;
  const e = starts.find(x => x > i) ?? js.length;
  res.push(`// ===== ${f} [${s}-${e}]\n` + js.slice(s, e).replace(/\(0,([a-z]{1,2})\.(jsxs?)\)/g, '\n(0,$1.$2)'));
}
const txt = res.join('\n\n') || 'not found';
if (out) { fs.writeFileSync(out, txt); console.log(`${res.length} module(s), ${txt.length} chars -> ${out}`); } else console.log(txt);
