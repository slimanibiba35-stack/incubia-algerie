// Replaces the first <tag ...> ... </tag> block (matched by indentation) that contains `needle`
// in a converted page with a JSX snippet, and adds an import line.
// Usage: node scripts/swap-block.cjs <file> <tag> <needle> <replacement> <importLine>
const fs = require('fs');
const [file, tag, needle, replacement, importLine] = process.argv.slice(2);
let s = fs.readFileSync(file, 'utf8');
const lines = s.split('\n');
const hit = lines.findIndex(l => l.includes(needle));
if (hit < 0) throw new Error('needle not found: ' + needle);
// walk up to the opening tag of the block, then down to its closing tag at the same indentation
let start = hit;
while (start >= 0 && !new RegExp(`^\\s*<${tag}[\\s>]`).test(lines[start])) start--;
if (start < 0) throw new Error('opening <' + tag + '> not found');
const indent = lines[start].match(/^\s*/)[0];
let end = start;
if (!new RegExp(`</${tag}>\\s*$`).test(lines[start])) {
  end = lines.findIndex((l, i) => i > start && l === `${indent}</${tag}>`);
  if (end < 0) throw new Error('closing </' + tag + '> not found');
}
console.log(`replacing lines ${start + 1}-${end + 1}`);
lines.splice(start, end - start + 1, indent + replacement);
s = lines.join('\n');
if (importLine && !s.includes(importLine)) {
  s = s.replace('import { SiteFooter } from "@/components/site/site-footer"', `import { SiteFooter } from "@/components/site/site-footer"\n${importLine}`);
}
fs.writeFileSync(file, s);
