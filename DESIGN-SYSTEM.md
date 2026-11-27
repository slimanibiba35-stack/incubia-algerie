# Incubia Algérie — Design System (reference)

Extracted from the **live site** (incubia-algerie.com, Nov 2026). Use this as the
source of truth for every new section or page so changes look native.

---

## 1. Brand colors

### Core
| Token | Hex | Use |
|---|---|---|
| **Primary / Électrique** | `#1B1AFE` | Main CTA buttons, links, "Commercial" pillar, gradient start |
| Primary light | `#4B4AFF` | Gradient end for primary (`from-[#1B1AFE] to-[#4B4AFF]`) |
| Violet (mid) | `#7B5CFA` | Middle stop of the hero headline gradient |
| **Lavande / Secondary** | `#CA9BFA` | "Digital" pillar, gradient end, decorative dots |
| Lavande pale | `#E9D5FF` | Light borders/backgrounds on the Digital pillar |
| **Vert / Accompagnement** | `#059669` | "Accompagnement" pillar, success CTAs |
| Vert clair | `#10B981` | Gradient end for green |
| Mint | `#97D2C7` | Button hover tint, focus rings |

### Neutrals
| Token | Hex | Use |
|---|---|---|
| Heading text | `#0D1F1A` | All dark headings (`text-[#0D1F1A]`) |
| Body text | `#47534E` | Paragraphs, descriptions |
| Border | `#E7EBE9` | Card borders, dividers |
| Surface | `#F9FAF9` | Section background (gradient `from-white to-[#F9FAF9]`) |
| White | `#FFFFFF` | Cards, alternating sections |
| Dark band | `#1A1A2E` / `#0D1F1A → #1A1A3E` | Dark CTA band, footer |

### Signature gradients
- **Headline highlight:** `linear-gradient(90deg, #1B1AFE, #CA9BFA)` clipped to text
  (hero uses `#1B1AFE → #7B5CFA → #CA9BFA`).
- **Primary badge/number:** `linear-gradient(135deg, #1B1AFE, #4B4AFF)`.
- **Section background:** `linear-gradient(180deg, #FFFFFF, #F9FAF9)`.

### The 3 pillars — color coding (keep consistent everywhere)
| Pillar | Color | Gradient |
|---|---|---|
| 01 Commercial / Prospection | `#1B1AFE` | `#1B1AFE → #4B4AFF` |
| 02 Digital / Site web & réseaux | `#CA9BFA` (text `#7B5CFA`) | `#CA9BFA → #E9D5FF` |
| 03 Accompagnement / Formation | `#059669` | `#059669 → #10B981` |

---

## 2. Typography

- **Font:** `Inter` (variable, 100–900), fallback `system-ui, -apple-system, sans-serif`.
- Headings are **tight** (`tracking-tight` = `-0.025em`), body is normal.

| Role | Size (mobile → md → lg) | Weight | Notes |
|---|---|---|---|
| Hero H1 | 58 → 74 → 88 px | 800 | `leading-[0.92]`, white, gradient word |
| Section H2 | 36 → 48 → 60 px (`text-4xl md:text-5xl lg:text-6xl`) | 700 | `#0D1F1A`, `mb-6`, one gradient phrase |
| Card H3 | 24 → 30 px (`text-2xl md:text-3xl`) | 700 | `#0D1F1A` |
| Card subtitle | 14 px | 600 | Pillar color |
| Lead paragraph | 18 → 20 px (`text-lg md:text-xl`) | 400 | `#47534E`, `max-w-2xl/3xl`, centered |
| Body | 16 px / 24 px | 400 | `#47534E` |
| Small | 14 px / 20 px | 400–500 | Lists, meta |
| Eyebrow badge | 12–14 px | 600 | In a pill above H2 (e.g. "Nos Services") |
| Hero eyebrow | 12 px, uppercase, `tracking-widest` | 600 | "STRUCTUREZ · DIGITALISEZ · SCALEZ" |

---

## 3. Spacing & layout

- Base unit **4 px** (Tailwind `--spacing: .25rem`).
- Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px.
- **Section padding:** `py-32` (128 px) top/bottom; `py-28` on denser sections.
- **Container:** `max-w-7xl` (1280 px) centered, `px-6` mobile / `px-16` on hero.
- Section header block: centered, badge → H2 → lead paragraph, `mb-16`–`mb-20` before content.
- Grids: 3 columns on desktop for pillars (`md:grid-cols-3`), 4 columns for steps.

---

## 4. Shape, depth & motion

| Token | Value |
|---|---|
| Radius sm / md | 8 px / 12 px (buttons `rounded-xl`) |
| Radius card | 24 px (`rounded-3xl` = 1.5 rem) |
| Radius hero blocks | 32 px (2 rem) |
| Pills / badges | `9999px` (fully round) |
| Shadow card | `0 4px 24px rgba(27,26,254,.08)` |
| Shadow lift (hover) | `0 20px 60px rgba(27,26,254,.14)` |
| Button shadow | `shadow-lg shadow-[#1B1AFE]/30` |

**Motion:** subtle. Hover = `-translate-y-[1px]` / `scale-[1.02]`, numbered
squares `scale-110 rotate-3`. Durations 300–500 ms, `cubic-bezier(.4,0,.2,1)`.
Sections fade/slide up on scroll (framer-motion).

---

## 5. Components

**Eyebrow badge (above H2)**
Pill, light tint of primary (`bg-[#1B1AFE]/10` style), text `#1B1AFE`, 600 weight, small.

**Primary button**
`bg #1B1AFE`, white text, `rounded-xl` (or `rounded-full` in hero), height 44–48 px,
`font-semibold`, arrow icon on the right, shadow `#1B1AFE/30`, hover `opacity .9` + lift.

**Ghost button (on dark)**
`rounded-full`, `border white/25`, `bg white/10`, `backdrop-blur`, white text.

**Pillar card**
White, `rounded-3xl`, border `#E7EBE9`, padding ~40 px, numbered gradient square
(64 px, `rounded-2xl`) top-left, faded line icon top-right, H3 + colored subtitle,
description, check-list, full-width button in the pillar color.
The middle/featured card gets a lavender border + "POPULAIRE" pill.

**Icons:** Lucide (stroke 2), 16–24 px, in the pillar color.

---

## 6. Imagery

- Real photos of **Algerian professionals** in office/meeting/training settings.
- Photos often sit under a **blue/violet overlay** (hero) — keep a similar tint
  (`#1B1AFE` → `#1A1A2E`, ~40–60 % opacity) when images sit behind text.
- Content images (beside text): `rounded-3xl`, soft shadow, no heavy filters.
- Stock images are placeholders until Incubia's own photos are provided.
