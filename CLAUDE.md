# INCUBIA ALGÉRIE — Claude Code Project Instructions

> **Purpose:** Maintain a distinctive, credible, professional website for INCUBIA Algérie. The site must feel designed by a thoughtful human design team, **not generated from a generic AI website template**.
>
> **Applies to:** Every visual, content, responsive, animation, image, and UI component change. These are ongoing repository rules, not a one-time prompt.

## 1. Non-negotiable design-system rule

1. **First read `INCUBIA_DESIGN_SYSTEM.md` wherever it has been added in the project**, then inspect the actual source code: global CSS, variables, Tailwind configuration (if used), fonts, layout components, and existing page patterns. The design-system document is an *observational inventory*, not a source of verified HEX codes or pixel values. **The current production code and verified computed styles are the authority for exact visual tokens.**
2. Reuse the current logo, brand colors, typography, button styles, card treatments, spacing scale, layout widths, shadows, radii, responsive breakpoints, and icon set. Extract missing values from the code before implementing; **never invent brand tokens from imagination**.
3. New pages and sections must look native to the current INCUBIA site. Reuse existing components (`Hero`, CTAs, service cards, metric items, process steps, FAQ, footer, etc.) where available, rather than creating competing versions.
4. Respect existing information architecture, French-language tone, accessibility, SEO headings, functional navigation, and the site's conversion goals (especially its diagnostic/contact CTAs).
5. **No full redesign, new visual identity, new component library, or dependency/framework switch** unless explicitly requested and approved.
6. Where the design-system reference conflicts with real source code, preserve working source-code conventions and report the discrepancy before changing anything visually.

## 2. Absolutely avoid generic “AI-generated website” aesthetics

Do **not** introduce the following just because they are trendy or easy for AI to generate:

- Random purple/blue gradients, neon glows, aurora backgrounds, luminous blobs, floating circles, or abstract mesh gradients.
- Glassmorphism, excessive translucency, generic frosted cards, thick soft shadows, or excessively rounded pill-shaped everything.
- Generic 3D icons, isometric illustration kits, robot faces, floating holographic dashboards, AI brains, circuits, or meaningless futuristic tech graphics.
- Stock-illustration people, generic vector doodles, decorative emoji, or mismatched icon styles.
- Repetitive three-card grids for every topic, alternating zigzag sections with no editorial reason, giant unused whitespace, and oversized hero headlines without content hierarchy.
- Gratuitous scroll-reveal, parallax, particles, typing effects, spinning shapes, animated gradients, hover zoom everywhere, or motion used only to seem impressive.
- Pretend analytics screenshots, invented client logos, fabricated testimonials, made-up growth figures, badges, certifications, or claims.
- Empty marketing buzzwords and template copy such as “revolutionize your future”, “unleash potential”, “next-generation solutions”, or “transform your digital journey” when no concrete service or proof follows.

**Exception:** If one of these effects is already a verified, intentional part of INCUBIA's current design system, preserve its existing use. The rule is **consistency and restraint**, not arbitrary removal of current branding.

## 3. Visual direction

Aim for **credible, contemporary, restrained, editorial-quality B2B design** that suits Algerian companies, entrepreneurs, SMEs, and professional decision-makers.

- Lead with clear message hierarchy, real value propositions, strong typography, clean alignment, precise spacing, and high-quality photography.
- Prefer purposeful page composition over decoration. Every visual must explain a service, build trust, or help conversion.
- Use a limited, consistent number of image ratios, card treatments, icon styles, and section variants drawn from the existing system.
- Make layouts feel custom to the actual content; do not automatically wrap every paragraph in a decorative card.
- Keep copy in clear, specific, polished French consistent with INCUBIA's terminology. Preserve factual claims unless their accuracy has been verified or the user approves an edit.
- Support responsiveness, keyboard navigation, visible focus states, adequate contrast, and `prefers-reduced-motion`.

## 4. Photography and stock-image policy — high quality only

**Prioritize genuine, well-composed photography over generic illustrations.**

> **Owner decision (20/11/2026):** free stock libraries have almost no credible photos of Algerian professionals at work, so **AI-generated photorealistic images are approved** for the website, under these conditions:
> - Each image is generated from an art-directed prompt in `docs/image-prompts.md` and approved by the owner before use.
> - It is recorded in `docs/image-sources.md` with: tool, prompt ID, generation date, and the tool's commercial-use terms for the plan used.
> - It never depicts or implies real INCUBIA staff, clients, offices, real identifiable people, real brands, or a specific real location presented as INCUBIA's.
> - It is rejected if it shows AI artefacts: distorted hands or fingers, warped faces, garbled text or logos, impossible objects, plastic skin, over-smooth lighting.
> - Same visual direction as below: editorial, natural light, restrained grading, no clichés.

### Preferred visual subjects

- Real professional working sessions, teams collaborating, entrepreneurship, B2B meetings, consulting, small-business operations, digital work, training workshops, and authentic business environments.
- Subjects and settings that plausibly represent Algeria / North Africa when context demands it. **Do not imply a photo depicts INCUBIA staff, clients, offices, or Algerian locations unless verified.**
- Natural lighting, genuine expressions, editorial framing, believable environments, realistic skin tones, and intentional negative space for headings.
- Diverse, context-appropriate people and professional environments without staged handshakes, pointing-at-laptop poses, or anonymous call-center headsets everywhere.

### Image sourcing and licensing

1. Use **reputable, licensable high-quality stock libraries** (for example, Unsplash or Pexels) or approved brand-owned assets. A paid source may be used only if the project already has an appropriate license.
2. **Verify the license and usage terms for each exact asset** before downloading or publishing it. Do not assume every image returned by a search is free for commercial use.
3. Never use Google image search thumbnails, scraped images, watermarked previews, copyrighted assets without rights, or hotlinked remote assets as permanent production assets.
4. Prefer downloading approved images into the project's asset pipeline, when the license permits, rather than relying on fragile third-party URLs.
5. Keep a source record in `docs/image-sources.md` with: page/section, asset filename, original source URL, author/photographer when available, license or permission basis, attribution requirement, and date checked. If a license cannot be verified, **do not publish the image; flag it for review**.
6. Avoid duplicated hero photos, visually incoherent image sets, low-resolution images, exaggerated post-processing, and obviously synthetic faces/hands (AI images are allowed only under the owner decision above).
7. If a suitable licensed image cannot be found, present **2–3 real candidate links** for approval and use an existing approved asset or neutral layout meanwhile. Do **not** fabricate source links or licenses.

### Quality and implementation

- Choose images sharp enough for their **actual displayed size**; target around 2× rendered pixel dimensions when practical, avoiding unnecessary oversized downloads.
- Crop intentionally using the subject and text safe areas; test desktop, tablet, and mobile crops. Never stretch or distort faces.
- Use modern formats (WebP/AVIF where supported), optimized file sizes, accurate `width`/`height` or aspect ratio, and responsive `srcset` / `sizes` as supported by the stack.
- Use descriptive French alt text for informative images and empty alt text for purely decorative ones.
- Lazy-load below-the-fold images; treat the above-the-fold hero as a priority asset if it is the page's LCP image.
- Do not use heavy generic color filters or fake gradient overlays to force unrelated photos to match. A restrained overlay is allowed only if established by the existing design.

## 5. Changes and approval workflow — mandatory

**Never directly push a visual change to `main` or deploy production without explicit approval.**

For each visual task:

1. **Audit:** Identify the existing relevant components, routes, tokens, images, and current design-system conventions. State which will be reused.
2. **Plan:** Explain the intended visual change in plain, non-technical language, with file paths. State image choices and their verified sources if images are involved.
3. **Implement safely:** Work on a separate branch or unmerged working changes. Keep the change scoped to the requested area. Do not redesign other pages without permission.
4. **Preview:** Supply **before-and-after screenshots** for every changed page and relevant desktop/mobile viewport, or an accessible local preview accompanied by a precise visual diff. Show the proposed stock images and source links. Do not claim screenshots exist if they could not be captured.
5. **Review:** Explain in simple terms what changed, why, and how it fits the existing system. Flag any deviations or unverifiable asset licenses.
6. **Approval gate:** Stop before merge, push to `main`, or deployment. Explicitly ask for approval. If screenshots or license evidence are unavailable, state that blocker; do not silently bypass the gate.
7. **Verify:** After approval, perform the requested merge/deployment steps only if the user has authorized those actions. Verify responsive behavior, navigation, accessibility basics, console errors, broken images, and performance implications.

**Important:** A request to *prepare or preview* a design is **not** authorization to merge or deploy it.

## 6. Definition of done — self-check before presenting work

- [ ] Existing INCUBIA design system followed; no invented exact tokens.
- [ ] No generic AI-template visual clichés or decorative effects without a purpose.
- [ ] Existing shared components reused where practical.
- [ ] Photography is high-quality, genuinely sourced, context-appropriate, and licensed/approved.
- [ ] Image origin, permissions, and attribution requirements are documented.
- [ ] All visuals and copy are plausible and factual; no fabricated data, staff imagery, logos, or testimonials.
- [ ] Desktop and mobile layouts checked; photos are intentionally cropped and optimized.
- [ ] SEO structure, meaningful alt text, contrast, keyboard use, and reduced-motion settings respected.
- [ ] Before/after previews and plain-language summary delivered.
- [ ] No merge to `main` or production deployment without explicit user approval.

## 7. Style of reporting back to the project owner

The project owner can inspect GitHub, Hostinger, Search Console, and Bing tools but may not want deep implementation jargon. Use a **short, understandable change report**:

- **What I changed** (plain language)
- **Why it improves INCUBIA** (clarity, credibility, conversion, performance)
- **What stayed identical** (brand tokens, typography, layout conventions, functionality)
- **Image sources** (links, licenses, asset filenames)
- **Before / after** (desktop and mobile screenshots or clearly stated limitation)
- **Where to review** (branch, preview link, changed files)
- **Approval needed** (before merge/deploy)

**If uncertain whether something looks 'AI-generated', choose the simpler, more credible, design-system-consistent option.**
