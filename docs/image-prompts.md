# INCUBIA — AI image prompts (photorealistic, editorial)

Approved by the owner on 20/11/2026: AI-generated images replace stock photos (see `CLAUDE.md` §4).
Generate each image with **[shared style] + [section prompt] + [negative prompt]**, then send me the
files. I'll check them for AI artefacts, crop and optimize them, and place them in the preview for your
approval.

**How to use:**
- **Midjourney:** paste the full text, then add the parameters shown for that section, for example `--ar 3:2 --style raw`.
- **Adobe Firefly, DALL·E or similar:** paste the full text. If the tool has a separate "avoid" or "negative" field, put the negative prompt there.
- **Resolution:** make each image at least **2400 px wide** (upscale if needed).
- **Choosing:** generate 4 variations per section and send me the best 1–2.

---

## Shared style (add to every prompt)

> Editorial corporate photography for a premium consulting firm, photographed on a full-frame camera with a 35mm lens at f/2.8, natural daylight from large windows, soft believable shadows, restrained warm-neutral colour grading, realistic skin texture with visible pores, natural unposed expressions, candid working moment, subtle depth of field, calm and sophisticated mood. Contemporary office in a Mediterranean North African city: white façades with blue shutters, wrought-iron balconies and palm trees softly out of focus through the windows. The people are Algerian professionals with North African Mediterranean features and varied skin tones, wearing contemporary business-casual clothing. Screens and documents are blurred and unreadable.

## Negative prompt (add to every prompt)

> holograms, floating interfaces, glowing screens, neon, blue tech gradient, circuit boards, robots, AI brain, handshake, pointing at a screen, call-centre rows, thumbs up, posing at the camera, flags, traditional costume, readable text, logos, watermark, extra or fused fingers, distorted hands, warped faces, plastic or airbrushed skin, HDR, lens flare, oversaturated colours, stock-photo smile

---

## Homepage

### H1 — Hero, Téléprospection · `--ar 4:3`
> A focused Algerian sales consultant in his mid-thirties, short beard and light-blue open-collar shirt, wearing a slim single-ear headset, in a live phone conversation with a prospect. He takes handwritten notes in a notebook next to an open laptop on a light oak desk. He is mid-sentence and attentive, looking slightly off-camera. A colleague is softly out of focus in the background. Framed from the side at desk height, with the subject on the left two-thirds.

### H2 — "Digital & visibilité" card · `--ar 16:9`
> An Algerian woman in her late twenties, a graphic designer with her hair tied back and a cream knit sweater, reviewing printed layout proofs for a small business's social media campaign. The proofs are spread on a large table beside a laptop and a phone; she compares two prints, pen in hand. Shot from a slight high angle, wide framing with the table in the foreground. No legible text on the prints.

### H3 — "Formation" card · `--ar 16:9`
> A small training workshop for business owners in a bright meeting room. An Algerian woman trainer in her forties, in a navy blazer, stands beside a flipchart with hand-drawn diagrams and talks to five seated participants of varied ages, men and women, taking notes. Seen from the back of the room over the participants' shoulders, with the trainer sharp and the participants slightly soft. Daylight from the left.

## À propos

### A1 — Main photo · `--ar 4:3`
> Two Algerian business partners, a man in his forties and a woman in her thirties, reviewing a client's commercial plan together at a wooden table covered with printed documents, a laptop and two coffee cups. A genuine working discussion: she points with a pen at a printed page and he listens. Shot at eye level across the table, with the city's white façades softly visible through the window behind them.

## Service pages (shown as a wide band under the hero)

**Format for every service image:** generate at `--ar 3:2`. On desktop the site crops the image to a wide 21:9 band. Keep faces and the key action in the **middle horizontal band** (roughly the middle 60 % of the height), with nothing important near the top or bottom edge.

### S1 — Prospection B2B
> A small Algerian business-development team of two at work: a woman in her thirties on a phone call with a slim headset, and a male colleague beside her reviewing a list of prospects on a laptop and marking names on a printout. They are concentrated and mid-task. Side view along the desk, with natural window light.

### S2 — Assistance commerciale
> A one-to-one sales coaching session: an experienced Algerian sales coach in his fifties with grey stubble, in a dark knit polo, and a younger saleswoman role-play a client call across a small round table. She speaks and he listens attentively, holding a sheet with an objection-handling checklist (unreadable). Medium shot at eye level.

### S3 — Accélération
> The founder of an established Algerian SME, a woman in her forties in a tailored blazer, in a strategic working session with an advisor, a man in his fifties. They lean over a large printed growth roadmap on a meeting table, with sticky notes and a laptop. A serious and constructive mood. Wide shot showing the bright office.

### S4 — Site web
> Over-the-shoulder view of an Algerian web designer in his late twenties, wearing a dark t-shirt and glasses, at a large monitor showing a clean website layout (blurred, unreadable). A phone displays the mobile version beside the keyboard, with paper wireframe sketches on the desk. Shallow depth of field focused on his hand on the mouse and the sketches.

### S5 — Publicité digitale
> Two Algerian marketers, a man and a woman in their early thirties, planning an advertising campaign at a wall covered with printed ad visuals and handwritten sticky notes. She rearranges one print while he holds a tablet. Seen in three-quarter view from behind, with the creative wall in focus. No readable text.

### S6 — Community management
> An Algerian community manager in her mid-twenties, in a simple modern light headscarf and an olive overshirt, photographing a small business's product (a handmade ceramic cup on a linen cloth) with her phone for a social media post. A laptop and a ring of natural daylight are on the table. Close-medium shot focused on her hands and phone, face partially visible.

### S7 — Formations
> A practical sales training session: an Algerian male trainer in his forties with rolled sleeves stands at a whiteboard with a hand-drawn sales funnel and asks a question. Seven participants around a U-shaped table raise hands or take notes. Wide shot from the side of the room, with warm afternoon daylight.

## Homepage service cards still without an image (requested 20/11/2026)

Cards are shown at **4:3**: generate at `--ar 4:3` and keep the subject centred.
Prompts already written above can be reused for: **Création de site web → S4**, **Publicité et campagnes boostées → S5**.

### P1 — Prospection en Algérie et à l'international · `--ar 4:3`
> An Algerian business developer in her early thirties, in a navy blazer, on a video call with a prospective foreign client, seen over her shoulder: the laptop screen shows a blurred video-call window (no readable text), a printed list of companies and a world map notebook beside it. Bright office, daylight from the side, attentive expression.

### D1 — Digitalisation (site web d'entreprise, CRM, processus commerciaux) · `--ar 4:3`
> An Algerian operations manager in his forties, in a light grey shirt, setting up a simple customer-tracking dashboard on a laptop (blurred, unreadable columns and cards) with a colleague in her late twenties who points at a printed process flow sketched on paper. Calm working moment at a light oak desk, natural daylight.

## Contact

### C1 — Recommendation: use a real photo of Oran, not an AI image
The Contact page says the head office is in Oran. An AI-generated "Oran" would show a city that doesn't exist. I suggest a real photo by an Algerian photographer on Unsplash. Candidates found 20/11/2026; licenses still to be checked before use:
- https://unsplash.com/photos/XbkpV8dFXD8 (kheedaj — view over the city and port)
- https://unsplash.com/photos/nGSJi54fo (Sid Ahmed SAOUD — city by the sea)

---

## Approval checklist for each generated image
- [ ] Hands: five fingers each, natural grip on objects.
- [ ] Faces: symmetric eyes, natural teeth, realistic skin, not airbrushed.
- [ ] No readable or garbled text, and no logos.
- [ ] Light and colour match the rest of the set.
- [ ] Nothing suggests these people are INCUBIA staff or clients.
- [ ] The tool's terms allow commercial use on your plan. Record this in `docs/image-sources.md`.
