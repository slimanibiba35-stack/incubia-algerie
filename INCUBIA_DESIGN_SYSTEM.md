# INCUBIA ALGÉRIE — Website Design System & Component Inventory

**Target:** https://www.incubia-algerie.com/  
**Prepared:** 19 November 2026  
**Use:** Reference for web design, redesign reviews, and AI coding assistants (including Claude Code).  
**Status:** **Observed page structure and content; unverified pixel-level design tokens.**

> **Important accuracy note:** This inventory is based on live, publicly indexed site pages and their accessible page content. Direct inspection of the rendered site's CSS, DOM computed styles, screenshots, and repository was unavailable in this environment. Therefore, **no exact HEX colors, font family names, pixel sizes, breakpoints, shadows, spacing, or corner radii are claimed**. Fields marked **TO VERIFY** must be read from the current website or source repository before implementation. The companion script `extract-incubia-design.mjs` is provided for that purpose. Historic 2025 WordPress images were excluded: they may not represent the current site's design.

## 1. Design identity

| Area | Observed pattern | Confidence |
|---|---|---|
| Audience | Algerian companies/PMEs and B2B teams | High — page copy |
| Positioning | Business growth through prospecting, digital presence, and accompaniment | High — homepage |
| Communication | Direct, professional, results-oriented, action-oriented, primarily French | High — multiple pages |
| Main conversion | Free diagnosis / contact request | High — recurrent CTAs |
| Secondary conversions | Explore services, request quote, explore pricing, training, events | High — internal navigation |
| Recurring semantic groups | Commercial, Digital, Accompagnement; steps, benefits, results, statistics | High — multiple pages |
| Exact visual theme | Backgrounds, accent hues, dark/light sections | **TO VERIFY** |
| Typeface | Heading/body font families and weights | **TO VERIFY** |
| Current logo geometry/colors | Logo file and safe-area | **TO VERIFY** |

**Character of the system:** This is a *conversion-first B2B marketing website* rather than an editorial-first or e-commerce-first site. Information architecture moves from **promise → method → services → trust → action**.

## 2. Reusable content hierarchy

### Global page anatomy

1. **Global navigation** — brand/logo, primary navigation to services, formation, resources and enterprise information, plus a prominent conversion action. A version of the navigation is explicitly visible on the Blog page; verify exact shared layout and menu behavior.
2. **Hero** — short eyebrow/category label, dominant H1, supporting paragraph, one or two CTAs. On the homepage the hero also includes lead-generation metrics and service pillars.
3. **Main content** — modular section headers with a small category label, H2, description, then service/feature/process cards.
4. **Proof/metrics** — figures, brief supporting labels, client outcomes or testimonials.
5. **Conversion section** — CTA with clear benefit, frequently a free diagnosis.
6. **Footer** — company summary, contact details, a repeated free-diagnosis CTA, four link groups, copyright/legal links. A compact stats row is present on many pages immediately before the footer.

### Text hierarchy (semantic, not measured)

| Role | Evidence | Implementation rule |
|---|---|---|
| Eyebrow / label | “Notre Méthode”, “Nos Services”, “Service”, “Packs & tarifs” | Small contextual kicker before a headline; appearance **TO VERIFY** |
| H1 | Homepage growth promise; Services, Pricing, Contact, Training page titles | Exactly one logical page-level H1; preserve accessible outline |
| H2 | Major content sections such as method, service families, FAQ | Consistent section-level heading style |
| H3 | Services, process steps, pricing tiers, benefit cards | Card titles / subsections |
| Body | Service descriptions, eligibility, action descriptions | Keep legible line lengths and hierarchy |
| Metadata | Duration, sector label, pricing qualifiers, category tags | Lower emphasis than primary body text |
| Numeric emphasis | “01–04” steps; KPIs such as “16+” | Reuse a numeric/stat display component |

**Writing convention:** Short headline + specific outcome + supporting explanation + clear verb-based action. The site mixes French business terminology with words such as *B2B*, *CRM*, *Digital*, *Leads*, *Scalez*, *Cold Email*. Preserve consistent terms across pages.

## 3. Site-specific component library

These components are **confirmed as content/interaction patterns** on the cited pages; their exact current geometry and styling remain to be verified.

| Component | Structure / content contract | Seen on |
|---|---|---|
| `SiteHeader` | Logo, link groups, primary CTA; possible dropdowns | Blog; global nav inferred elsewhere |
| `Hero` | Eyebrow, H1, supporting paragraph, CTA pair, optional media or proof | Home, Services, Contact, Pricing, Training, individual services |
| `PrimaryCTA` | Explicit high-intent action, usually diagnosis/quote | Almost all main pages |
| `SecondaryCTA` | Lower-intent exploration link/action | Home, Pricing, Training, service pages |
| `ServiceCard` | Order/index or category, title, offer summary, feature list, detail link | Home and Services |
| `ServiceDirectoryRow` | Short category tag, service name, compact description, “Voir la page” | `/services` |
| `ProcessStep` | Number + step name + description + optional duration | Home and prospecting / product service pages |
| `BenefitCard` | Short capability heading and explanation | Home, About, product service |
| `StatItem` | Large numeric/ratio value + caption | Home, footer strip, portfolio, training |
| `Badge` | Category or status, e.g. “POPULAIRE”, “NOUVEAU” | Home, Training, Navigation, Pricing |
| `Testimonial` | Quote, attribution, context or outcome chips | Portfolio |
| `FAQItem` | Question + answer; verify whether accordion, and keyboard behavior | Home, service pages |
| `PricingCard` | Plan name, “à partir de” price, benefits, action, qualifier | `/tarifs` |
| `EstimatorControl` | Goal selection, platform selection, numeric campaign budget input | `/tarifs` |
| `TrainingCard` | Audience, prerequisites, format, teacher, benefits, registration CTA | `/formations` |
| `FilterChip` | Content category filters | `/blog` |
| `ArticleCard` | Category, title, reading time, summary, author, date | `/blog` |
| `EventCard` | Type, calendar date, title, time, location, capacity, signup | `/evenements` |
| `ProfileCard` | Person, expertise, credentials or focus | `/a-propos`, `/equipe` |
| `ContactInfo` | Email, phone, WhatsApp, location, hours, location section | `/contact` |
| `ConversionBanner` | Title, supportive copy, one or two CTAs | Home, About, Pricing, service pages |
| `SiteFooter` | Company summary, contact, CTA, column groups, legal links | Nearly all pages |

### Component states to document in code

For buttons, interactive cards, filters, FAQ items, forms, menus and links, verify and record **default, hover, focus-visible, active, selected, disabled, error, and loading** states where applicable. The existence and styling of individual states **has not been established** from page text alone.

## 4. Layout and responsive rules

### Verified structural patterns

- Homepage: hero → four-step method → three service pillars → four benefits → examples of impact → conversion CTA → FAQ → footer/metrics.
- Services directory: introduction → Commercial services → Digital services → Accompagnement services → conversion CTA.
- Individual services: service-specific hero → benefits / approach → phased process → sometimes FAQ → final CTA.
- About: company description and offerings → mission → quantitative proof → profiles → values → history → CTA.
- Pricing: pricing hero → multiple package cards → interactive budget-estimate controls → supporting content.
- Contact: hero and availability status → contact details and opening hours → location section.
- Blog: featured content → category filters → article cards/pagination → newsletter CTA.

### Measurements still required

| Token / behavior | Current value |
|---|---|
| Desktop content max-width | **TO VERIFY** |
| Mobile/tablet/desktop breakpoints | **TO VERIFY** |
| Section vertical spacing | **TO VERIFY** |
| Grid columns per viewport | **TO VERIFY** |
| Card gaps and inner padding | **TO VERIFY** |
| Navbar height / sticky behavior | **TO VERIFY** |
| Mobile nav interaction | **TO VERIFY** |
| Mobile hero order / media crop | **TO VERIFY** |
| Illustration/photo treatment | **TO VERIFY** |

**Guidance until verified:** Preserve the existing site's content order and component hierarchy. Do not invent a new responsive grid, brand palette, border shape, or animation merely because it is common in modern agency websites.

## 5. Design token registry — awaiting exact extraction

These **semantic token names are a proposed inventory**, not confirmed names used by the site's stylesheets. Set values only after inspecting styles in the current repo / rendered pages.

| Category | Proposed tokens | Value status |
|---|---|---|
| Color | `color.brand.primary`, `color.brand.secondary`, `color.accent`, `color.text.primary`, `color.text.muted`, `color.surface.base`, `color.surface.card`, `color.surface.contrast`, `color.border`, `color.focus` | **TO VERIFY** |
| Typography | `font.family.body`, `font.family.heading`, `font.size.h1/h2/h3/body/small`, `font.weight.heading/body`, `font.lineHeight.*` | **TO VERIFY** |
| Spacing | `space.1`…`space.12`, `layout.container.maxWidth`, `layout.section.gap` | **TO VERIFY** |
| Radius | `radius.button`, `radius.card`, `radius.badge`, `radius.input` | **TO VERIFY** |
| Elevation | `shadow.card`, `shadow.hover`, `shadow.nav` | **TO VERIFY** |
| Motion | `duration.fast/normal`, `easing.default`, reduced-motion behavior | **TO VERIFY** |
| Breakpoints | `breakpoint.sm/md/lg/xl` | **TO VERIFY** |

The companion `tokens.template.json` records this uncertainty in a machine-readable form. **Never treat null token values as zero or CSS defaults.**

### Exact-token verification procedure

1. Check the actual website project for global CSS / Tailwind configuration, any theme provider, local font files, and component-level CSS.
2. Cross-check those definitions against computed styles on the deployed site and across desktop/mobile viewports.
3. Record the precise `font-family`, font weights, HEX/RGB colors, CSS variables, spacing, max-widths, radii, shadows, and responsive breakpoints.
4. Identify unused/legacy theme tokens; do not include old WordPress branding unless the current design explicitly uses it.
5. Save confirmed values into `tokens.template.json` or a new `tokens.verified.json` with a source path and verification date.

The provided `extract-incubia-design.mjs` can generate screenshots and a sampled computed-style audit on a computer that can access the public site. **It is a sampling tool, not an authoritative substitute for the source CSS.**

## 6. Content-to-component mapping by page

| Route | Distinctive modules |
|---|---|
| `/` | Growth hero, stats, 4-step method, 3 service pillars, benefits, case outcomes, FAQ, diagnosis CTA |
| `/services` | Grouped service directory (Commercial, Digital, Accompagnement) |
| `/services/commercial/prospection-b2b` | Four value propositions, four-stage process, FAQ, quote CTA |
| `/services/digital/produit-digital` | Technical stack labels, four-phase delivery, technology groups, project proof |
| `/tarifs` | Multi-tier pricing, badges, feature lists, budget calculator form |
| `/formations` | Need-based training pathways, program details, prerequisites, formats, instructors, CTAs |
| `/a-propos` | Offer summary, positioning, mission, experts, values, timeline, CTA |
| `/realisations` | Customer account, outcomes, KPI strip, trust / logo placeholders |
| `/contact` | Availability label, contact methods, office hours, location |
| `/blog` | Featured article, filters, article list, pagination, newsletter CTA |
| `/evenements` | Upcoming event cards, past-event list, email CTA |

## 7. Conversion and UX consistency

**Primary conversion language:** “Diagnostic Gratuit”, “Obtenir un Diagnostic Gratuit”, “Demander mon diagnostic”. Keep a canonical copy variant for new designs, while preserving the existing public text until editorial approval.

**Supporting patterns:** low-risk framing (free / no obligation), expected response time, proof metrics, transparent service details, process timing, and contextual links back to services or quotes.

**Potential consistency issues to audit (observed text, not visual defects):**

- Homepage displays “+120 entreprises” alongside footer “16+ Clients B2B”. These may measure different things, but the distinction is not explained in the page content.
- Contact page displays “DISPONIBLE 24/7” but also lists restricted office hours. This may mean WhatsApp vs staffed hours; clarify in copy.
- Some pages mix old startup framing with newer B2B / PME positioning, e.g., parts of the blog.
- A historical image asset was indexed from a previous WordPress design. Do not assume its mint/pin-note styling matches the current site.
- Editorial consistency: capitalization, French/English phrases, heading hierarchy and CTA wording should follow an agreed vocabulary.

## 8. Design implementation guardrails for Claude Code

When working in the actual Incubia repository:

1. **Read existing design tokens and components before changing UI.** Search global CSS, Tailwind/config, app root, fonts, layout and shared component files.
2. Reuse the existing palette, typography, spacing and responsive patterns. If a token has not been verified, **look it up rather than guessing**.
3. Preserve the site language (French), business goals, SEO heading semantics, alt text and accessible link/button labels.
4. Build shared modules rather than individually styling near-identical service, metrics, CTA and footer sections.
5. Test at mobile, tablet, and desktop widths; verify no horizontal overflow and that interactive controls remain usable.
6. **For any visible change, provide before-and-after screenshots or a visual diff before merging into `main`.** Avoid altering production visuals without review.
7. Do not overwrite existing pricing, performance claims or legal content while making styling changes.
8. Keep contrast and keyboard-focus visibility accessible; honor `prefers-reduced-motion`.

## 9. Source pages reviewed

- Home — https://www.incubia-algerie.com/
- Services — https://www.incubia-algerie.com/services
- Prospection B2B — https://www.incubia-algerie.com/services/commercial/prospection-b2b
- Digital Product — https://www.incubia-algerie.com/services/digital/produit-digital
- Pricing — https://www.incubia-algerie.com/tarifs
- Training — https://www.incubia-algerie.com/formations
- About — https://www.incubia-algerie.com/a-propos
- Portfolio — https://www.incubia-algerie.com/realisations
- Contact — https://www.incubia-algerie.com/contact
- Blog — https://www.incubia-algerie.com/blog
- Events — https://www.incubia-algerie.com/evenements

**Editorial note:** Source pages were checked on 19 Nov 2026; some search snapshots are older. Reconfirm page text before using it in production.

---

**Summary:** The website's verified *structural design language* is a CTA-driven B2B marketing system with consistent page sections, numbered methods, service family cards, proof metrics, and repeated diagnostic conversions. Its **literal visual design system requires CSS and rendered-page inspection**; the exact-value fields are deliberately unfilled rather than fabricated.
