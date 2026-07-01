# Yare Cruz Design System

The brand and UI language for **Yare Cruz**, a self-taught Full Stack Developer based in (Spanish-speaking) Latin America. Yare's portfolio (`yarecruz.dev`) is a single-page personal site that doubles as her freelance shopfront — it pitches her as a hireable dev for landing pages, full-stack web apps, and APIs.

The design is **code-first and developer-coded**: navy + warm gold on a deep near-black navy background, monospace accents for code/URLs, a `</>` mark, dot-grid backgrounds, soft glow orbs, and floating "stat" cards. It deliberately feels like a confident solo-dev portfolio — not an agency, not a corporate template.

## Product context

One product: **the portfolio site itself.** Sections from top to bottom:

| # | Section | Purpose |
|---|---------|---------|
| 00 | Hero | Greeting, name, rotating role (typing), available-for-freelance pill, photo with floating stats |
| 01 | About me | Bio, 3-stat row, journey timeline, "self-taught & proud" |
| 02 | Stack | Skill bars in three columns (Frontend / Backend / Tools) + "currently learning" chips |
| 03 | Projects | Filterable 3-up grid (All · Frontend · Full Stack · Backend) |
| 04 | Services | Three pricing cards (the middle is "Most popular"), extras row, CTA banner |
| 05 | Blog | 3-up post grid + newsletter card |
| 06 | Contact | Form + sidebar (availability, social links, response time) |
|  | Footer | Brand block + nav + CTA + copyright |

Bilingual EN/ES throughout. A `LanguageContext` swaps strings; visual layout is identical between languages.

## Sources

- **Codebase:** `yare-portfolio/` — Next.js 16 (App Router) + React 19 + Tailwind 4 + Framer Motion 12 + `lucide-react` icons. Inline-style heavy. Single file per section under `src/components/`. All copy lives in `src/lib/translations.ts`.
- **Logo:** `yare-portfolio/public/yarelogo.png` (copied to `assets/yarelogo.png`).
- **Photo:** `yare-portfolio/public/me.jpg` (copied to `assets/me.jpg`).
- **No Figma. No additional brand book.** Everything here was distilled from the codebase.

## Index

Root files:

- `README.md` — this file
- `colors_and_type.css` — all color, type, spacing, radius, shadow, motion tokens. **Single source of truth.**
- `SKILL.md` — entrypoint for agent use of this design system
- `assets/` — `yarelogo.png`, `me.jpg`, `SocialIcons.tsx`, the original Next.js `file/globe/next/vercel/window.svg` set
- `preview/` — small HTML cards for the Design System tab (colors, type, components, brand)
- `ui_kits/portfolio/` — pixel-aware React recreation of the full portfolio with a click-through `index.html`

---

## CONTENT FUNDAMENTALS

### Voice & person

Yare writes in **first person, casual but professional**. The whole site reads like a confident dev sliding into your DMs, not an agency brochure. She is comfortable mixing in tech jargon (`Full Stack`, `JWT`, `React Native`, `Prisma ORM`) untranslated because her audience reads it natively. In Spanish, she casually code-switches into English for tech terms (`"Self-taught developer"`, `"Mi journey"`, `"VS Code extensions"`).

### "You" addressing

Direct second-person, never formal. In Spanish she uses **tú** (`"Cuéntame tu idea"`, `"¡Escríbeme!"`), never **usted**. In English: `"Tell me your idea"`, `"Hire me"`, `"Write to me now"`.

### Tone — short, opinionated, warm

- Headlines are direct statements, not questions: `"A dev with a story"`, `"My tools"`, `"What I've built"`, `"How can I help you?"`, `"Let's talk"`.
- Subheads explain plainly: `"I work with you from idea to deployment. No agencies, no middlemen — you talk directly to the dev."`
- Microcopy on labels is intentionally rough/casual: `"USD · pago único"`, `"USD · cotización personalizada"`, `"USD · desde"`.
- Liberal use of parentheticals for personality: `"(in the best way)"`, `"(y no morir en el intento)"`.

### Casing

- Section labels: numbered + Title Case + period — `01. About me`, `02. Stack`, `03. Projects`. Then UPPERCASED + letter-spaced (0.28em) in render.
- Display headings: sentence case (`"A dev with a story"`), never Title Case.
- Buttons: sentence case (`"View my projects"`, `"Hire me"`, `"Request a quote"`).
- All-caps reserved for tiny labels: eyebrow tags, journey dates, "scroll" hint.

### Emoji

Used **sparingly, as accents**, not as a system. Treated as typographic flourishes:

- `✦` is the brand sparkle — appears in CTAs (`"Let's Talk ✦"`, `"Hire me ✦"`, `"Most popular"` ribbon).
- `☕` and emoji like `🌱 ⚡ 🚀 💻 ⚛️` are used in the timeline/blog as accents only.
- `📚` prefaces "Currently learning:".
- `😊` appears once, in the contact success message.

Never decorative on buttons in general; never used in body copy.

### Trademark phrases

- `"Self-taught & Proud"` / `"Self-taught · autodidact · and proud of it"`
- `"I turn ideas into digital products that actually work."` (bolds "actually work")
- `"No agencies, no middlemen — you talk directly to the dev."`
- `"Made with ♥ by Yare Cruz"` in footer.

### Numbers + units

- Prices: `$250`, `$400`, `$800` USD always shown big + bold + black weight, with `USD · one-time payment` style suffix in muted color.
- Stats: `10+`, `15+`, `100%`, `< 24h` — always written compact with `+` or comparison operator, displayed in the navy→gold gradient.
- Read time: `7 min`, `5 min`, `4 min`.

---

## VISUAL FOUNDATIONS

### Palette

Two brand colors only, on a dark surface stack:

- **Navy `#2D3E6E`** — the "Cruz" half of the wordmark, bracket strokes, structural lines. Three steps: `--yc-navy` / `--yc-navy-mid #3D5488` / `--yc-navy-light #5A76B8`. Navy-light is used a lot for secondary text + decorative strokes.
- **Gold `#F5A623`** — the "Yare" half of the wordmark, the `/` inside `</>`, primary CTA, accents, eyebrow labels. Two extra steps: `--yc-gold-light #FFD485`, `--yc-gold-dark #C97F0E`.
- **Background stack** (dark-only system): `--yc-bg-deep #040810` (footer) → `--yc-bg #070D1A` (page) → `--yc-bg-card #0C1628` → `--yc-bg-elevated #111E35`.
- **Text:** `--yc-text #EEF2FF` (primary) and `--yc-text-muted #7A8FAF` (secondary).
- **Semantic green** `#34d399` only for the "Available" status pill.

No light mode. The brand only exists on dark.

### Type

- **Inter** (Google Fonts, weights 300–900, variable). Used for everything. Hero name + section headings use **900 (Black)** with tight tracking (`-0.025em` to `-0.03em`).
- **JetBrains Mono** as the code accent — used for tech tags, URLs, the `</>` mark, the typing role on hero, dates. Always feels like terminal text.
- Type scale lives in `colors_and_type.css` as `--yc-fs-*` raw tokens plus `.yc-h1`, `.yc-h2`, `.yc-h3`, `.yc-eyebrow`, `.yc-label`, `.yc-body`, `.yc-meta`, `.yc-mono` semantic classes.
- The **signature flourish** is the navy→gold gradient text — used on the name "Yare Cruz" in hero and on all numeric stats (`10+`, `15+`, `< 24h`). Apply `.yc-gradient-text` to inherit.

### Spacing

- Section vertical rhythm: `110px` top/bottom (`--yc-space-section`). Drops to `72px` on mobile.
- Container max-width: `1140px`, with `32px` horizontal padding.
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64 px (`--yc-space-1` … `--yc-space-16`).

### Backgrounds & textures

- **Dot grid pattern** (`.dot-bg`): `radial-gradient(rgba(45,62,110,0.22) 1px, transparent 1px)` at `28px 28px`. Applied at 50% opacity to the hero behind everything.
- **Glow orbs** — large blurred circles paired with the dot grid. Two per scene, always one navy and one gold. Sizes ~350–500px, `filter: blur(80–100px)`, low opacity (0.06–0.12). They sit absolute-positioned, off-screen at the corners.
- **No images-as-background, no patterns, no textures, no grain.** The mood is "code editor at night."

### Borders & dividers

- Default card border: `1px solid rgba(45,62,110,0.30)` — a soft navy alpha. Never solid color.
- Strong border on hover/focus: `rgba(90,118,184,0.40)`.
- Gold border for "featured": `rgba(245,166,35,0.40)` or `0.50` on a popular pricing card.
- Section dividers are **gradient hairlines** — `linear-gradient(90deg, transparent, rgba(45,62,110,0.4), transparent)` at 1px height. Always fade-in fade-out, never solid edge to edge.
- The **section underline rule** is a 44×2px tiny gradient bar (navy-light → gold) sitting under each h2. This is a signature.

### Shadows

- **Gold glow** is the only colored shadow: `0 4px 20px rgba(245,166,35,0.25)` on primary CTAs, escalating to `0 8px 32px rgba(245,166,35,0.45)` on press/popular elevation.
- **Card hover lift:** `translateY(-4px to -5px)` + `0 20px 50px rgba(0,0,0,0.25)`.
- **Elevated popular card:** `0 0 0 1px rgba(245,166,35,0.1), 0 24px 60px rgba(0,0,0,0.25)` (a faint gold ring + deep drop).
- Inner shadows: not used.
- Protection gradients: the photo cards use a `linear-gradient(to top, rgba(7,13,26,0.7) 0%, transparent 55%)` for legibility over imagery. No protection capsules.

### Corner radii

- `6px` for tech tags (slightly more than a perfect square)
- `9–10px` for buttons & form fields
- `12px` for small extras row items + tab pills
- `14px` for floating stat cards
- `16px` for default cards
- `20px` for hero photo + large pricing cards + CTA banner
- `99px` (pill) for status badges and "Most popular" ribbon

### Buttons

Three variants only:

1. **`.btn--gold`** — flat gold background, dark text, bold, with gold glow. **Primary action.**
2. **`.btn--primary`** — navy→gold 135° gradient, white text. Used for "View my projects" hero CTA.
3. **`.btn--outline`** — transparent with `1px solid rgba(90,118,184,0.4)`. Secondary.

Hover state: `transform: scale(1.02)` + intensified shadow. Press: `scale(0.99)`. 180ms ease.

### Hover & press states

- **Card hover:** `translateY(-5px)` + deep drop shadow + border lightens to navy-light alpha 0.5. Image inside zooms `scale(1.05)` over 0.6s.
- **Icon button hover:** color shifts `--yc-text-muted` → `--yc-gold` and `scale(1.1)`.
- **Nav link hover:** color shifts muted → text. Active link gets the gradient underline.
- **Press:** buttons go to `scale(0.99)`.
- **Selection** (text highlight): gold background, dark text — set via `::selection`.
- **Scrollbar thumb:** navy at rest, gold on hover.

### Animations

- **Easing of choice:** `cubic-bezier(0.22, 1, 0.36, 1)` — expo-out, framer-motion's hero curve. Used for all entrance animations.
- **Durations:** 0.18s (hover micro-interactions), 0.3s (state transitions), 0.6–0.7s (entrance reveals).
- **Reveals on scroll:** `react-intersection-observer` gates `opacity 0→1` + `y: 24→0` `translateY` per element, with staggered `delay` (0, 0.1, 0.2 …).
- **Typing animation** on hero role: characters in @ 55ms, hold 2200ms, characters out @ 28ms, loop.
- **Floating stat cards** on hero: `floatY` keyframe, ±8px on a 4s ease-in-out loop, second card has a 1.2s delay.
- **Status pill dot pulse:** opacity + box-shadow ring breathing on a 2s loop.
- **Cursor blink:** `step-end` 1s.
- **No bounces, no springs**, no inertia overshoots — just smooth ease-out.

### Layout rules

- Fixed nav at top, transparent at rest, blurred-opaque (`rgba(7,13,26,0.95)` + `backdrop-filter: blur(18px)`) once `scrollY > 50`. Pads from `20px 0` → `12px 0`.
- Hero is `100vh`, top-padded `100px` to clear the nav.
- Everything else flows in 110px-tall sections, alternating `--yc-bg` and `--yc-bg-card` (every other section is `.section--alt`).
- Cards stack to single column under `900px` viewport.
- Container is centered, fixed at `1140px` max, with `32px` side padding (`20px` on mobile).

### Transparency & blur

Used judiciously:

- The nav: backdrop-filter + 0.95 surface alpha.
- Floating stat cards on hero: `rgba(12,22,40,0.95)` + `backdrop-filter: blur(12px)`.
- Project hover overlay: `rgba(7,13,26,0.8)` + `backdrop-filter: blur(6px)`.
- Mobile menu overlay: `rgba(7,13,26,0.97)` + `backdrop-filter: blur(20px)`.

Never used for whole-page glassmorphism backgrounds.

### Imagery

Photography (the personal photo at hero, the candid photo in About, project covers, blog covers) is **warm and contemporary, edited dark with a slight gold cast** so it sits naturally on the dark navy surface. Project covers in the source use Unsplash photos. The kit replaces them with subject-tinted gradient placeholders since real photo selection is the user's brand call.

Photos are always wrapped in rounded containers (`16–20px`) with a `1px navy-alpha border`, and topped with a bottom-up gradient (`rgba(7,13,26,0.5–0.85)` to transparent) for caption legibility.

---

## ICONOGRAPHY

The system uses three icon sources:

1. **Lucide React** (`lucide-react@1.16.0`) — primary icon set. Stroke style, 2px stroke weight, round caps & joins. Used at 10–22px inline. Inherits `currentColor`. Examples in the source: `ArrowDown`, `ArrowRight`, `Check`, `Clock`, `Heart`, `Mail`, `Send`, `ExternalLink`, `Menu`, `X`, `Loader2`.

2. **Hand-rolled brand SVGs** for socials at `assets/SocialIcons.tsx` — `GithubIcon`, `LinkedinIcon`, `XTwitterIcon`. These are solid `fill: currentColor`, single-path, 24×24 viewBox. They visually match the surrounding Lucide set in size but use fill-not-stroke because they're recognizable logos.

3. **The `</>` text-mark** — rendered as JetBrains Mono characters in gold (`var(--yc-gold)`), `font-size: 20–26px`, `font-weight: 700`, `letter-spacing: -0.05em`. This is the closest thing to a logomark in the brand and is used in the navbar and mobile menu.

### Emoji as glyphs

A small set is used as text characters, never as imagery:

- `✦` — brand sparkle. Always trailing in CTA labels (`"Let's Talk ✦"`, `"Hire me ✦"`, `"✦ Most popular"`).
- `🌱 ⚡ 🚀 💻 ⚛️ ☕ 📚 😊` — appear once each in copy strings (journey milestones, blog post emoji, "currently learning", success state). Not a system, just sprinkled in.

### Substitutions / flags

- The original codebase uses **Next.js `next/font`** to self-host Inter. This design system loads Inter from Google Fonts CDN instead (`@import` in `colors_and_type.css`). **No font files were copied** since the source doesn't ship `.ttf`/`.woff2` files. **If a self-hosted setup is required, ask Yare to export the Inter variable woff2 from Google.**
- **JetBrains Mono** is a substitution. The source CSS uses generic `ui-monospace, 'Fira Code', monospace`. The design system picks JetBrains Mono as the most code-editor-feeling concrete choice. **Flag to Yare if she has a specific mono preference.**
- Lucide icons are loaded via direct JSX in the source. In the design system's UI kit they're hand-rolled as inline SVGs matching Lucide's 1.16.0 paths so the kit works without a build step. The full Lucide set is available at https://lucide.dev if you want to extend.

---

## Caveats / known gaps

- Stack and Blog sections have **preview cards** but are not part of the click-through UI kit `index.html` (they exist in the codebase under `src/components/Stack.tsx` and `Blog.tsx` if needed).
- Mobile burger menu states are not exercised in the prototype — the kit is shown at desktop width (1280).
- The bilingual EN/ES toggle is rendered in the navbar but does not swap copy in this static kit.
