// Puts the live and local screenshots of one page next to each other (scaled down), optionally cropped to a
// vertical band. Usage: node preview/side-by-side.mjs <slug> [top] [height] -> preview/screenshots/compare/<slug>-sbs.png
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'screenshots', process.env.DIR || 'compare');
const [slug, top = '0', height = '0'] = process.argv.slice(2);
const SCALE = Number(process.env.S || 0.4);
async function part(file) {
  const img = sharp(path.join(DIR, file));
  const m = await img.metadata();
  const t = Math.min(Number(top), m.height - 1);
  const h = Number(height) ? Math.min(Number(height), m.height - t) : m.height - t;
  return sharp(await img.extract({ left: 0, top: t, width: m.width, height: h }).toBuffer())
    .resize(Math.round(m.width * SCALE)).png().toBuffer({ resolveWithObject: true });
}
const a = await part(`${slug}-live.png`), b = await part(`${slug}-local.png`);
const gap = 12;
await sharp({ create: { width: a.info.width + b.info.width + gap, height: Math.max(a.info.height, b.info.height), channels: 3, background: '#ff00ff' } })
  .composite([{ input: a.data, left: 0, top: 0 }, { input: b.data, left: a.info.width + gap, top: 0 }])
  .png().toFile(path.join(DIR, `${slug}-sbs.png`));
console.log(path.join(DIR, `${slug}-sbs.png`));
