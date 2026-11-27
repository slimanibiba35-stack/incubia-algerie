// Builds preview/review.html: before (live site) / after (new version) screenshots side by side, with the
// change report. Images come from preview/screenshots/compare (node preview/compare-live.mjs, W=1440 and 390)
// and are embedded as JPEG so the page works on its own.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SHOTS = path.join(HERE, 'screenshots', 'compare');
const OUT = path.join(HERE, 'screenshots', 'review');
fs.mkdirSync(OUT, { recursive: true });

const pages = [
  ['home', 'Accueil', 'Nouveau haut de page centré sur la prospection, rail « Nos services » avec photos, « Nos pôles d’expertise », méthode et « Pourquoi choisir Incubia ? » repris du texte actuel, FAQ restylée. L’ancien bloc « Trois Leviers » est retiré.'],
  ['a-propos', 'À propos', 'Nouvelle mise en page (bandeau bleu marine avec photo, mission avec collage, services en cartes, parcours, valeurs). Mêmes textes. Les chiffres (16+ clients, 90 % de satisfaction) et la photo Unsplash présentée comme « Équipe Incubia » sont retirés de cette page, comme dans l’aperçu.'],
  ['tarifs', 'Tarifs', 'Nouveaux prix (proposition à valider), nouvelle offre « Prospection Commerciale B2B » à 120 000 DA / mois, cartes centrées, calculateur avec frais de gestion d’au moins 55 000 DA.'],
  ['formations', 'Formations', 'Photo en bandeau sous le titre ; espaces manquants corrigés dans le titre (« pourprospecter, convaincreet »).'],
  ['acceleration-entreprises', 'Accélération', 'Photo en bandeau sous le titre.'],
  ['contact', 'Contact', 'Nouveau numéro 042 05 51 88 ; le vendredi n’apparaît plus comme jour ouvré.'],
];

async function pair(slug, width, scale) {
  const imgs = [];
  for (const side of ['live', 'local']) {
    const file = path.join(SHOTS, `${slug}-${width}-${side}.png`);
    const m = await sharp(file).metadata();
    imgs.push(await sharp(file).resize(Math.round(m.width * scale)).jpeg({ quality: 72 }).toBuffer());
  }
  return imgs.map(b => `data:image/jpeg;base64,${b.toString('base64')}`);
}

let body = '';
for (const [slug, name, what] of pages) {
  const [dl, dn] = await pair(slug, 1440, 0.32);
  const [ml, mn] = await pair(slug, 390, 0.62);
  body += `
  <section>
    <h2>${name}</h2>
    <p class="what">${what}</p>
    <h3>Ordinateur (1440 px)</h3>
    <div class="pair"><figure><figcaption>Avant — site actuel</figcaption><img src="${dl}" alt="${name}, site actuel, ordinateur"></figure>
    <figure><figcaption>Après — nouvelle version</figcaption><img src="${dn}" alt="${name}, nouvelle version, ordinateur"></figure></div>
    <h3>Téléphone (390 px)</h3>
    <div class="pair"><figure><figcaption>Avant</figcaption><img src="${ml}" alt="${name}, site actuel, téléphone"></figure>
    <figure><figcaption>Après</figcaption><img src="${mn}" alt="${name}, nouvelle version, téléphone"></figure></div>
  </section>`;
}

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Incubia — avant / après (26/11/2026)</title>
<style>
  body { margin: 0; font: 15px/1.55 system-ui, sans-serif; color: #0D1F1A; background: #F9FAF9; }
  main { max-width: 1100px; margin: 0 auto; padding: 32px 20px 80px; }
  h1 { font-size: 28px; margin: 0 0 8px; } h2 { font-size: 22px; margin: 0 0 6px; } h3 { font-size: 14px; color: #47534E; margin: 20px 0 8px; }
  .intro, section { background: #fff; border: 1px solid #E7EBE9; border-radius: 16px; padding: 24px; margin-bottom: 24px; }
  .what { margin: 0; color: #47534E; }
  .pair { display: flex; gap: 16px; align-items: flex-start; overflow-x: auto; }
  figure { margin: 0; flex: 1 1 0; min-width: 0; } figcaption { font-size: 13px; font-weight: 600; margin-bottom: 6px; }
  img { display: block; width: 100%; height: auto; border: 1px solid #E7EBE9; border-radius: 8px; }
  ul { padding-left: 20px; } li { margin: 4px 0; }
</style></head>
<body><main>
  <div class="intro">
    <h1>Incubia — avant / après</h1>
    <p>Captures du 26/11/2026. « Avant » = incubia-algerie.com aujourd’hui. « Après » = la nouvelle version du site, construite dans notre propre code et prête à être installée sur le serveur (VPS). Rien n’est encore en ligne.</p>
    <p>Toutes les autres pages (services, blog, mentions légales…) sont identiques au site actuel, à part le nouveau numéro de téléphone, le bouton WhatsApp flottant et le nouveau menu « Services ».</p>
    <p>Lecture des captures : chaque page est photographiée écran par écran pendant le défilement. Sur ordinateur, la rangée « Nos services » de l’accueil défile de gauche à droite pendant qu’on descend : elle apparaît donc à trois moments différents.</p>
  </div>
  ${body}
</main></body></html>`;
fs.writeFileSync(path.join(HERE, 'review.html'), html);
console.log('preview/review.html', (html.length / 1e6).toFixed(1), 'MB');
