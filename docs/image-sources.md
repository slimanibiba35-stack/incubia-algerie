# Image sources — INCUBIA website

**Status (20/11/2026): no stock photos in use; 6 owner-supplied AI images in the preview.** At the owner's request, every stock photo added
to the preview was removed (files deleted, placements emptied in `preview/additions.js` and
`preview/pages.js`). New images must match the brief: editorial quality, credible Algerian /
North African business context, no clichés. Record each new image here before it is used:
page/section, file, source URL, author, license basis, attribution requirement, date checked.

**26/11/2026: ported into the site code.** The files below are now served from `public/images/ai/` and
`public/images/unsplash/` (same names). Placements in code: homepage hero and "Nos services" rail
(`components/site/home-intro.tsx`), À propos hero and collage (`components/site/about-redesign.tsx`),
Formations and Accélération bands (`components/site/image-band.tsx`, inserted by
`scripts/rebuild-from-live.mjs`). The live site's hotlinked Unsplash photo on À propos is gone with the
section it was in.

| Page / section | File | Source URL | Author | License | Attribution | Checked |
|---|---|---|---|---|---|---|
| Accueil — hero (replaced the image below, 20/11/2026) | preview/images/ai/hero-teleprospecteur.webp | Supplied by the owner 20/11/2026 — origin (AI tool or stock) to confirm | — | Owner decision | To confirm | 20/11/2026 |
| Accueil — carte Téléprospection B2B (was the hero) | preview/images/ai/teleprospection.webp | AI-generated, supplied by the owner 20/11/2026 | — | Owner decision (CLAUDE.md §4) | None | 20/11/2026 |
| Accueil — carte Réseaux sociaux | preview/images/ai/reseaux-sociaux.webp | AI-generated, supplied by the owner | — | Owner decision | None | 20/11/2026 |
| Accueil — carte Image de marque | preview/images/ai/contenus-visuels.webp | AI-generated, supplied by the owner | — | Owner decision | None | 20/11/2026 |
| Accueil — carte Formation | preview/images/ai/formation-vente.webp | AI-generated, supplied by the owner | — | Owner decision | None | 20/11/2026 |
| Formations — bandeau | preview/images/ai/formation-atelier.webp | AI-generated, supplied by the owner | — | Owner decision | None | 20/11/2026 |
| Accélération — bandeau | preview/images/ai/accompagnement.webp | AI-generated, supplied by the owner | — | Owner decision | None | 20/11/2026 |

| Accueil — carte Prospection Algérie / international | preview/images/unsplash/prospection-international.webp | https://unsplash.com/photos/9Pqp6CUaIu4 | @bluestonex_apphaus | Unsplash License (page: "Photo gratuite") | Not required | 20/11/2026 |
| Accueil — carte Création de site web | preview/images/unsplash/site-web.webp | https://unsplash.com/photos/Mo08jadTWYc | @mhmanik02 | Unsplash License (page: "Photo gratuite") | Not required | 20/11/2026 |
| Accueil — carte Publicité et campagnes | preview/images/unsplash/publicite.webp | https://unsplash.com/photos/w00FkE6e8zE | @uxindo | Unsplash License (page: "Photo gratuite") | Not required | 20/11/2026 |
| Accueil — carte Digitalisation | preview/images/unsplash/digitalisation.webp | https://unsplash.com/photos/Of_m3hMsoAA | @judmackrill | Unsplash License (page: "Photo gratuite") | Not required | 20/11/2026 |

Unsplash photos added 20/11/2026 at the owner's request; downloaded 1200×900 WebP (4:3 crop) into the
project, not hotlinked. Review notes: the Digitalisation photo uses a "pointing at a laptop" pose
(discouraged by CLAUDE.md §4); the Publicité photo shows upside-down handwritten notes; Apple logos are
visible on laptops in two photos. None of these photos depicts Algeria or INCUBIA.

**Still missing for these 6 images (required by CLAUDE.md §4 before going live):** the generation tool,
the prompt ID used, and that tool's commercial-use terms for the owner's plan. Checked visually
20/11/2026: no distorted hands or faces, no readable text or logos.

## Removed (never deployed, kept for the record)

All Pexels License, all removed 20/11/2026:
- Accueil hero Téléprospection — pexels.com/photo/8204319 (Kampus Production)
- Accueil carte Digital — pexels.com/photo/12902944 (Mizuno K)
- Accueil carte Formation — pexels.com/photo/9034728 (RDNE Stock project)
- À propos — 7869015 (Pavel Danilyuk), alternative 7984728 (Thirdman)
- Prospection B2B 8867628, Assistance commerciale 7698706 (Yan Krukau)
- Accélération 935977 (nappy), Site web 326505 (Tranmautritam)
- Publicité digitale 7710074 (Alena Darmel), Community management 10376030 (RDNE Stock project)
- Formations 13804492 (Centre for Ageing Better), Contact 11092342 (Hichem Dahmani, Algiers)

Earlier Unsplash placeholders (call-center team, laptop team, conference room) were also removed.

## Notes for the next selection

- The live Contact page says the head office is in **Oran**: a city photo there must be of Oran.
- The live À propos page still hotlinks an Unsplash photo (photo-1522202176988) with the alt text
  « Équipe Incubia en action », which implies stock models are the INCUBIA team. To fix in source.
- Free libraries (Unsplash, Pexels, checked 20/11/2026) have very few photos of Algerian
  professionals at work; most "Algeria" results are cities, landscapes and portraits.
