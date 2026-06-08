# Caring Hearts Care — Astro site

Marketing website for **Caring Hearts Care**, a compassionate in-home senior care agency
serving **Potomac, MD and the greater DC / MD / VA area**. Brand promise: *"Your Family Is Our
Family."* This is a rebuild of the live **caringheartscare.com** site on Astro, using the
**Caring Hearts Care design system** (downloaded from Claude Design).

## Stack & hosting
- **Astro** (static output) + **astro-icon** (Lucide) + **@astrojs/sitemap**.
- Hosted on **Cloudflare Pages**, auto-deploying from GitHub on push to `main`. **Deploy = `git
  push`** → auto-build + redeploy (~1–2 min). See `DEPLOY.md`.
- Repo: GitHub `SonsRamirez/caring-hearts-care` (public).

## Project shape
- `src/styles/` — the design-system tokens (`tokens/*.css`), `kit.css` (layout + component
  classes), and `global.css` (the single import entry, linked once from `BaseLayout`). These are
  ported verbatim from the design system — **edit tokens here, don't hardcode brand values in
  components.**
- `src/components/` — `.astro` ports of the DS primitives: `Button`, `Eyebrow`, `Heading`,
  `Badge`, `ServiceCard`, `Testimonial`, `Stat`, `Logo`, plus `Icon` (Lucide wrapper),
  `Header`/`Footer` (chrome), `SubHero`, `CtaBand`, `ArticleBlock`.
- `src/layouts/BaseLayout.astro` — document shell, SEO/OpenGraph meta, header + footer.
- `src/data/` — content data:
  - `site.ts` — **central config**: phone, email, social, service area, hours, and the
    **Web3Forms key**. ⚠️ Phone/email are PLACEHOLDERS — see below.
  - `services.ts` — the 9 services (used by Home, Services, and the `[slug]` detail pages).
  - `articles.ts` — the 6 real blog posts (block-based content) + authors.
- `src/pages/` — file-based routes: `index` (Home), `about`, `services/` (index +
  `[slug]` for 9 details), `pricing`, `faq`, `careers`, `contact`, `blog/` (index + `[slug]`),
  `404`.
- `public/assets/` — `logos/` (6 mark variants) and `photos/` (hero, pledge, per-service).

## ⚠️ Placeholders to confirm before launch
All in `src/data/site.ts`:
- **`phone` / `phoneHref`** = `(301) 555-0142` — a PLACEHOLDER. The live site doesn't publish a
  scrapeable number; replace with the real one.
- **`email`** = `care@caringheartscare.com` — confirm or replace.
- **`web3formsKey`** = `YOUR_WEB3FORMS_ACCESS_KEY` — get a free key at https://web3forms.com
  (it's just your delivery email, no account). The contact & careers forms won't deliver mail
  until this is set. Once set, submissions email you; the careers "Apply" buttons deep-link to
  `/contact?subject=Careers`.

## Brand rules (keep intact)
- **Color:** navy `#0E2A47` foundation + gold `#C8A14B` accent + cream `#FAF7F0` ground.
  Primary CTA = **gold fill with navy text** (never white on gold).
- **Type:** Tinos (serif headlines), Jost (sans body/nav), Source Sans 3 (UI/buttons).
- **Motif:** uppercase gold eyebrow → serif headline → 64×3px gold rule.
- **Icons:** Lucide via `Icon.astro` (`<Icon name="heart-handshake" />`). No emoji.
- **Voice:** warm, family-centered, "you / your loved one", never clinical or salesy.

The full design system (readme, guidelines, original UI kit) lives in the parent folder under
`../design-system-extracted/` for reference.

## Commands
- `npm run dev` — local dev server (localhost:4321)
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built `dist/`
