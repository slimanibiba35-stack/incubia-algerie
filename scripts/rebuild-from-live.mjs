// Rebuilds the site's pages from the snapshot of the live incubia-algerie.com (preview/live-snapshot/).
// The live site's source code was lost (Vercel access lost, 26/11/2026); its server-rendered HTML is the
// most faithful record of what is in production. Each page's markup is converted to TSX:
//  - shared header/footer become <SiteHeader/> / <SiteFooter/>
//  - Radix accordions become the project's Accordion components (answers recovered from the live JS)
//  - framer-motion "initial" inline styles (opacity:0 / transform) are dropped so content is visible
//  - internal <a> become next/link, Next images become next/image
// Run: node scripts/rebuild-from-live.mjs [--only=<snapshot-name>]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument, DomUtils } from 'htmlparser2';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAP = path.join(ROOT, 'preview', 'live-snapshot');
const only = process.argv.find(a => a.startsWith('--only='))?.slice(7);

// ---------- FAQ answers from the live JS bundles ----------
const faq = new Map();
for (const f of fs.readdirSync(path.join(SNAP, 'js'))) {
  const js = fs.readFileSync(path.join(SNAP, 'js', f), 'utf8');
  const re = /(?:question|q)\s*:\s*"((?:[^"\\]|\\.)*)"\s*,\s*(?:answer|a)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  for (const m of js.matchAll(re)) faq.set(norm(JSON.parse(`"${m[1]}"`)), JSON.parse(`"${m[2]}"`));
}
function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

// ---------- attribute mapping ----------
const RENAME = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  minlength: 'minLength', autocomplete: 'autoComplete', autofocus: 'autoFocus', colspan: 'colSpan', rowspan: 'rowSpan',
  srcset: 'srcSet', crossorigin: 'crossOrigin', fetchpriority: 'fetchPriority', allowfullscreen: 'allowFullScreen',
  frameborder: 'frameBorder', referrerpolicy: 'referrerPolicy', datetime: 'dateTime', enctype: 'encType',
  novalidate: 'noValidate', inputmode: 'inputMode', spellcheck: 'spellCheck', contenteditable: 'contentEditable',
  playsinline: 'playsInline', autoplay: 'autoPlay', 'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink',
  'xml:space': 'xmlSpace', charset: 'charSet', 'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv',
};
const BOOL = new Set(['disabled', 'required', 'checked', 'selected', 'hidden', 'multiple', 'readOnly', 'autoFocus', 'open',
  'allowFullScreen', 'async', 'defer', 'noValidate', 'playsInline', 'autoPlay', 'muted', 'loop', 'controls']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const camel = s => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const q = s => JSON.stringify(s);

function styleObj(style) {
  const decls = style.split(';').map(d => d.trim()).filter(Boolean).map(d => {
    const i = d.indexOf(':'); return [d.slice(0, i).trim(), d.slice(i + 1).trim()];
  });
  const map = new Map(decls);
  // framer-motion initial state → final (visible) state
  if (map.get('opacity') === '0') { map.delete('opacity'); map.delete('transform'); }
  if (/^scale[XY]?\(0\)$/.test(map.get('transform') || '')) map.delete('transform');
  if (map.get('transform') === 'none') map.delete('transform');
  if (map.get('color') === 'transparent' && map.size === 1) map.delete('color');   // next/image placeholder style
  map.delete('delay');   // not a CSS property (a stray animation prop on live); browsers ignore it
  if (!map.size) return null;
  return '{{' + [...map].map(([k, v]) => `${k.startsWith('--') ? q(k) : camel(k.replace(/^-ms-/, 'ms-'))}: ${q(v)}`).join(', ') + '}}';
}

function nextImageSrc(src) {
  const m = src.match(/^\/_next\/image\?url=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : src;
}

const ctx = { link: false, image: false, accordion: false };

function attrs(el) {
  const out = [];
  for (let [k, v] of Object.entries(el.attribs || {})) {
    if (k === 'id' && /^radix-/.test(v)) continue;
    if (/^aria-(controls|labelledby)$/.test(k) && /radix-/.test(v)) continue;
    if (k === 'data-radix-collection-item' || k === 'data-nimg') continue;
    if (k === 'style') { const s = styleObj(v); if (s) out.push(`style=${s}`); continue; }
    let name = RENAME[k] || RENAME[k.toLowerCase()] || k;
    if (!/^(data|aria)-/.test(name) && name.includes('-')) name = camel(name);
    if (el.name === 'input' && name === 'value') name = 'defaultValue';
    if (el.name === 'input' && name === 'checked') name = 'defaultChecked';
    if (el.name === 'option' && name === 'selected') continue;
    if (el.name === 'textarea' && name === 'value') name = 'defaultValue';
    if ((BOOL.has(name) || name === 'defaultChecked') && (v === '' || v === k.toLowerCase())) { out.push(name); continue; }
    if (name === 'tabIndex' || name === 'colSpan' || name === 'rowSpan' || name === 'maxLength' || name === 'minLength' || name === 'rows' || name === 'cols') { out.push(`${name}={${Number(v)}}`); continue; }
    out.push(`${name}=${q(v)}`);
  }
  return out;
}

function text(t) {
  if (!t) return '';
  if (/^[^{}<>&\n]*$/.test(t) && t === t.trim() && t.length) return t;
  return `{${q(t)}}`;
}

function isAccordionRoot(el) { return el.attribs?.['data-slot'] === 'accordion'; }

function render(node, ind) {
  const pad = '  '.repeat(ind);
  if (node.type === 'text') { const t = text(node.data); return t ? pad + t : ''; }
  if (node.type !== 'tag' && node.type !== 'script' && node.type !== 'style') return '';
  const el = node;
  if (el.name === 'script' || el.name === 'template' || el.name === 'noscript') return '';
  if (el.name === 'style') return `${pad}<style>{${q(DomUtils.textContent(el))}}</style>`;
  if (isAccordionRoot(el)) return renderAccordion(el, ind);

  let tag = el.name;
  let a = attrs(el);
  if (tag === 'a' && /^\/(?!\/)/.test(el.attribs.href || '') && !/\.(pdf|png|jpe?g|svg|webp)$/i.test(el.attribs.href)) { tag = 'Link'; ctx.link = true; }
  if (tag === 'img' && /^\/_next\/image\?/.test(el.attribs.src || '') || (tag === 'img' && 'data-nimg' in (el.attribs || {}))) {
    ctx.image = true;
    const at = el.attribs;
    const fill = at['data-nimg'] === 'fill';
    const keep = [`src=${q(nextImageSrc(at.src))}`, `alt=${q(at.alt || '')}`];
    if (fill) keep.push('fill'); else { if (at.width) keep.push(`width={${Number(at.width)}}`); if (at.height) keep.push(`height={${Number(at.height)}}`); }
    if (at.sizes) keep.push(`sizes=${q(at.sizes)}`);
    if (at.class) keep.push(`className=${q(at.class)}`);
    if (at.fetchpriority === 'high' || at.loading === 'eager') keep.push('priority');
    return `${pad}<Image ${keep.join(' ')} />`;
  }
  const open = `<${tag}${a.length ? ' ' + a.join(' ') : ''}`;
  if (VOID.has(el.name)) return `${pad}${open} />`;
  const kids = el.children.filter(c => !(c.type === 'comment') && !(c.type === 'text' && c.data === ''));
  if (!kids.length) return `${pad}${open}></${tag}>`;
  const hasText = kids.some(c => c.type === 'text' && c.data.trim() !== '');
  const hasWs = kids.some(c => c.type === 'text');
  if (hasText || hasWs) {
    // inline rendering keeps text spacing exact
    const inner = kids.map(c => c.type === 'text' ? text(c.data) : render(c, 0).trim()).join('');
    return `${pad}${open}>${inner}</${tag}>`;
  }
  return `${pad}${open}>\n${kids.map(c => render(c, ind + 1)).filter(Boolean).join('\n')}\n${pad}</${tag}>`;
}

const missingFaq = [];
function renderAccordion(root, ind) {
  ctx.accordion = true;
  const pad = '  '.repeat(ind);
  const items = DomUtils.findAll(e => e.attribs?.['data-slot'] === 'accordion-item', root.children);
  const lines = [`${pad}<Accordion type="single" collapsible${root.attribs.class ? ` className=${q(root.attribs.class)}` : ''}>`];
  items.forEach((item, i) => {
    const trigger = DomUtils.findOne(e => e.attribs?.['data-slot'] === 'accordion-trigger', item.children);
    const content = DomUtils.findOne(e => e.attribs?.['data-slot'] === 'accordion-content', item.children);
    const tClass = (trigger.attribs.class || '').replace(/^.*?\[&\[data-state=open\]>svg\]:rotate-180\s*/, '');
    const tKids = trigger.children.filter(c => !(c.type === 'tag' && c.name === 'svg' && /lucide-chevron-down/.test(c.attribs.class || '')));
    const qText = norm(DomUtils.textContent(tKids).replace(/^\d+/, ''));
    let answer = faq.get(qText);
    if (!answer) { for (const [k, v] of faq) if (qText.endsWith(k) || k.endsWith(qText)) { answer = v; break; } }
    if (!answer) missingFaq.push(qText);
    const inner = content && content.children.length ? content.children.map(c => render(c, ind + 3)).join('\n') : `${'  '.repeat(ind + 3)}${text(answer || 'TODO: réponse introuvable')}`;
    lines.push(`${pad}  <AccordionItem value=${q('item-' + (i + 1))} className=${q(item.attribs.class.replace(/^border-b border-\[rgba\(11,11,11,0\.04\)\] /, ''))}>`);
    lines.push(`${pad}    <AccordionTrigger className=${q(tClass)}>`);
    lines.push(tKids.map(c => render(c, ind + 3)).join('\n'));
    lines.push(`${pad}    </AccordionTrigger>`);
    const numbered = DomUtils.findOne(e => /w-8 h-8 rounded-full/.test(e.attribs?.class || ''), tKids, true);
    lines.push(`${pad}    <AccordionContent className=${q(numbered ? ACCORDION_CONTENT_CLASS.numbered : ACCORDION_CONTENT_CLASS.plain)}>`);
    lines.push(inner);
    lines.push(`${pad}    </AccordionContent>`);
    lines.push(`${pad}  </AccordionItem>`);
  });
  lines.push(`${pad}</Accordion>`);
  return lines.join('\n');
}
// Answer styles used by the live FAQs (from the compiled AccordionContent calls):
// homepage FAQ (numbered questions) and the formations FAQ.
const ACCORDION_CONTENT_CLASS = {
  numbered: 'text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base',
  plain: 'text-[#47534E] pb-6 leading-relaxed',
};

// ---------- head metadata ----------
const DEFAULT_TITLE = 'Incubia Algérie — Services B2B pour Entreprises';
const DEFAULT_DESC = 'Services B2B pour entreprises algériennes : prospection commerciale, création de site web, publicité digitale, community management et accompagnement accélération PME.';
function metadata(doc) {
  const titles = DomUtils.findAll(e => e.name === 'title', doc.children).map(t => DomUtils.textContent(t)).filter(Boolean);
  const title = titles.find(t => t !== DEFAULT_TITLE) || titles[0];
  const metas = DomUtils.findAll(e => e.name === 'meta', doc.children);
  const get = n => metas.filter(m => m.attribs.name === n || m.attribs.property === n).map(m => m.attribs.content).find(Boolean);
  const descs = metas.filter(m => m.attribs.name === 'description').map(m => m.attribs.content);
  const desc = descs.find(d => d !== DEFAULT_DESC) || descs[0];
  const md = {};
  // Five live titles repeat the site name ("Tarifs & Packs | Incubia Algérie | Incubia Algérie"): keep one.
  if (title && title !== DEFAULT_TITLE) md.title = { absolute: title.replace(/( \| Incubia Algérie)+$/, ' | Incubia Algérie') };
  if (desc && desc !== DEFAULT_DESC) md.description = desc;
  const ogt = metas.filter(m => m.attribs.property === 'og:title').map(m => m.attribs.content).find(t => t !== DEFAULT_TITLE);
  if (ogt) md.openGraph = { title: ogt, description: get('og:description'), type: get('og:type') || 'website' };
  return md;
}

// ---------- per-page fixups ----------
const addImport = (src, line) => src.replace('import { SiteFooter } from "@/components/site/site-footer"', m => `${m}\n${line}`);
// Line ranges [start, end] of the page's top-level <section> blocks (rendered at 6 spaces).
function sectionRanges(lines) {
  const out = [];
  lines.forEach((l, i) => { if (l.startsWith('      <section')) out.push([i, lines.indexOf('      </section>', i)]); });
  return out;
}
// Inserts JSX right after the <div> block whose opening line contains `needle`, at the same indentation.
function insertAfterBlock(src, needle, jsx) {
  const lines = src.split('\n');
  const s = lines.findIndex(l => l.includes(needle));
  if (s < 0) throw new Error(`insertAfterBlock: ${needle} not found`);
  const indent = lines[s].match(/^\s*/)[0];
  const e = lines.findIndex((l, i) => i > s && l === indent + '</div>');
  lines.splice(e + 1, 0, ...jsx.split('\n').map(j => indent + j));
  return lines.join('\n');
}
const band = (file, alt, pos) => `{/* Owner-supplied image, approved in the preview (20/11/2026): docs/image-sources.md */}\n<ImageBand src="/images/ai/${file}.webp" alt="${alt}" position="${pos}" />`;

// The live formations title is missing two spaces around its gradient span ("pourprospecter, convaincreet").
const fixFormationTitle = src => src
  .replace('pour<span className="bg-gradient-to-r from-[#CA9BFA]', 'pour{" "}<span className="bg-gradient-to-r from-[#CA9BFA]')
  .replace('convaincre</span>et structurer', 'convaincre</span>{" "}et structurer');

const FIXUPS = {
  '/a-propos': src => {
    // Decorative bars that framer-motion animates from width 0 on the live site: set their final width
    // (values read from the live JS, in page order).
    const widths = ['64px', '64px', '80px', '40%', '40%', '40%', '40%', '60px', '64px'];
    let i = 0;
    src = src.replace(/width: "0px"/g, m => (i < widths.length ? `width: "${widths[i++]}"` : m));
    // Redesign approved in the preview (20/11/2026): the intro, mission, figures, values and story sections
    // become <AboutRedesign/> (same texts); the team section and the closing call to action stay.
    const lines = src.split('\n');
    const replaced = sectionRanges(lines).filter(([s, e]) =>
      /Qui Sommes-Nous|Positionnement|En Chiffres|Ce qui nous guide|Notre Histoire/i.test(lines.slice(s, e + 1).join('\n')));
    if (replaced.length !== 5) throw new Error(`/a-propos: expected 5 sections to replace, found ${replaced.length}`);
    for (const [s, e] of [...replaced].reverse()) lines.splice(s, e - s + 1);
    lines.splice(replaced[0][0], 0, '      <AboutRedesign />');
    return addImport(lines.join('\n'), 'import { AboutRedesign } from "@/components/site/about-redesign"');
  },
  '/services/formation': src => fixFormationTitle(src),
  '/formations': src => {
    src = insertAfterBlock(fixFormationTitle(src), '<div className="text-center max-w-5xl mx-auto">',
      band('formation-atelier', 'Une formatrice présente des schémas sur un paperboard à un petit groupe de participants autour d’une table.', '50% 40%'));
    return addImport(src, 'import { ImageBand } from "@/components/site/image-band"');
  },
  '/acceleration-entreprises': src => {
    src = insertAfterBlock(src, '<div className="text-center max-w-3xl mx-auto">',
      band('accompagnement', 'Une conseillère et un dirigeant étudient ensemble des documents imprimés autour d’une table de travail.', '50% 35%'));
    return addImport(src, 'import { ImageBand } from "@/components/site/image-band"');
  },
};
// Owner decision (20/11/2026): calls go to 042 05 51 88, shown without +213. WhatsApp (wa.me/213542999301)
// is unchanged; wa.me links never use the "+213…" forms below.
function phoneFix(src) {
  return src.split('tel:+213542999301').join('tel:042055188')
    .split('+213 (0) 542 99 93 01').join('042 05 51 88')
    .split('+213 542 99 93 01').join('042 05 51 88')
    .split('+213542999301').join('042055188');
}
function applyFixups(route, src) { return phoneFix(FIXUPS[route] ? FIXUPS[route](src) : src); }

// Pages edited by hand after conversion (forms, calculator, new homepage design): never overwritten
// unless --force is passed.
const HAND_EDITED = new Set(['/', '/tarifs', '/contact', '/reservation-formation', '/ressources']);
const force = process.argv.includes('--force');

// ---------- pages ----------
const LAYOUT_LD = '"@type":"Organization"';
const files = fs.readdirSync(SNAP).filter(f => f.endsWith('.html') && !f.includes('#') && (!only || f === only + '.html'));
const report = [];
let footerDone = false;

for (const f of files) {
  ctx.link = ctx.image = ctx.accordion = false;
  const doc = parseDocument(fs.readFileSync(path.join(SNAP, f), 'utf8'), { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true });
  const main = DomUtils.findOne(e => e.name === 'main', doc.children);
  const header = DomUtils.findOne(e => e.name === 'header', main.children, false);
  const footer = DomUtils.findOne(e => e.name === 'footer', main.children, false);

  if (!footerDone && f === 'index.html') {
    // The stats strip (16+ clients…) is shown on every live page except /a-propos, whose own stats sit just above.
    const lines = render(footer, 2).split('\n');
    const s = lines.findIndex(l => l.includes('className="py-12 border-b border-white/10"'));
    const indent = lines[s].match(/^\s*/)[0];
    const e = lines.findIndex((l, i) => i > s && l === indent + '</div>');
    lines.splice(e + 1, 0, indent + ')}');
    lines.splice(s, 0, indent + '{stats && (');
    const body = lines.join('\n');
    const imps = [ctx.link && 'import Link from "next/link"', ctx.image && 'import Image from "next/image"'].filter(Boolean).join('\n');
    fs.mkdirSync(path.join(ROOT, 'components', 'site'), { recursive: true });
    fs.writeFileSync(path.join(ROOT, 'components', 'site', 'site-footer.tsx'),
      phoneFix(`// Rebuilt from the live incubia-algerie.com footer (server-rendered HTML, 26/11/2026).\n${imps}\n\nexport function SiteFooter({ stats = true }: { stats?: boolean }) {\n  return (\n${body}\n  )\n}\n`));
    footerDone = true;
    ctx.link = ctx.image = false;
  }

  const sections = main.children.filter(c => c !== header && c !== footer && !(c.type === 'text' && !c.data.trim()) && c.type !== 'comment');
  const body = sections.map(s => render(s, 3)).filter(Boolean).join('\n');
  const lds = DomUtils.findAll(e => e.name === 'script' && e.attribs.type === 'application/ld+json', doc.children)
    .map(s => DomUtils.textContent(s)).filter(s => !s.includes(LAYOUT_LD));
  const md = metadata(doc);

  const route = f === 'index.html' ? '' : f.replace(/\.html$/, '').split('__').join('/');
  const dir = path.join(ROOT, 'app', ...route.split('/').filter(Boolean));
  const imports = [
    'import type { Metadata } from "next"',
    ctx.link && 'import Link from "next/link"',
    ctx.image && 'import Image from "next/image"',
    'import { SiteHeader } from "@/components/site/site-header"',
    'import { SiteFooter } from "@/components/site/site-footer"',
    ctx.accordion && 'import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"',
  ].filter(Boolean).join('\n');
  const ldJsx = lds.map(s => `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${q(s)} }} />`).join('\n');
  const name = (route.split('/').filter(Boolean).map(p => p.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase())).join('') || 'Home') + 'Page';
  const src = `// Rebuilt from the live page ${'/' + route} (server-rendered HTML snapshot, 26/11/2026) by scripts/rebuild-from-live.mjs.
${imports}

export const metadata: Metadata = ${JSON.stringify(md, null, 2)}

export default function ${name}() {
  return (
    <main className=${q(main.attribs.class || '')}>
${ldJsx ? ldJsx + '\n' : ''}      <SiteHeader />
${body}
      <SiteFooter${DomUtils.textContent(footer).includes('Clients B2B') ? '' : ' stats={false}'} />
    </main>
  )
}
`;
  fs.mkdirSync(dir, { recursive: true });
  if (HAND_EDITED.has('/' + route) && !force && fs.existsSync(path.join(dir, 'page.tsx'))) { report.push(`${'/' + route} skipped (hand-edited)`); continue; }
  fs.writeFileSync(path.join(dir, 'page.tsx'), applyFixups('/' + route, src));
  report.push(`${('/' + route).padEnd(48)} sections=${sections.length} ld=${lds.length} ${ctx.accordion ? 'accordion ' : ''}${Object.keys(md).join(',')}`);
}
console.log(report.join('\n'));
if (missingFaq.length) console.log('\nFAQ answers NOT found:\n' + missingFaq.join('\n'));
