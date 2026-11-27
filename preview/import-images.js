// Converts the owner's generated images (docs/image-prompts.md) into optimized WebP for the preview.
// Name each source file by its prompt ID: H1.png, S3.jpg, A1.webp ...
// Usage: node preview/import-images.js <folder-with-generated-images>
// Output: preview/images/ai/<name>.webp (full) + <name>-sm.webp (half width), cropped with smart focus.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SPEC = {   // ID: [output name, width, height]
  H1: ['accueil-teleprospection', 1600, 1200],
  H2: ['accueil-digital', 1600, 900],
  H3: ['accueil-formation', 1600, 900],
  A1: ['a-propos', 1600, 1200],
  S1: ['prospection-b2b', 2160, 1440],
  S2: ['assistance-commerciale', 2160, 1440],
  S3: ['acceleration', 2160, 1440],
  S4: ['site-web', 2160, 1440],
  S5: ['publicite-digitale', 2160, 1440],
  S6: ['community-management', 2160, 1440],
  S7: ['formations', 2160, 1440],
};

const src = process.argv[2];
if (!src || !fs.existsSync(src)) { console.error('Usage: node preview/import-images.js <folder>'); process.exit(1); }
const out = path.join(__dirname, 'images', 'ai');
fs.mkdirSync(out, { recursive: true });

(async () => {
  for (const f of fs.readdirSync(src)) {
    const id = path.parse(f).name.toUpperCase();
    const spec = SPEC[id];
    if (!spec) { console.log(`skip ${f} (name it by prompt ID, e.g. S1.png)`); continue; }
    const [name, w, h] = spec;
    const meta = await sharp(path.join(src, f)).metadata();
    if (meta.width < w * 0.75) console.log(`WARN ${f}: ${meta.width}px wide, below the ${w}px target; upscale before import`);
    for (const [vw, vh, suf] of [[w, h, ''], [Math.round(w / 2), Math.round(h / 2), '-sm']]) {
      const info = await sharp(path.join(src, f)).rotate()
        .resize(vw, vh, { fit: 'cover', position: 'attention' })
        .webp({ quality: 80, effort: 6 }).toFile(path.join(out, `${name}${suf}.webp`));
      console.log(`${id} -> ${name}${suf}.webp ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`);
    }
  }
})();
