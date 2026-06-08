# Deploying Caring Hearts Care

The site is a static Astro build hosted on **Cloudflare Pages**, auto-deploying from GitHub.

## How deploys work
- The GitHub repo is **`SonsRamirez/caring-hearts-care`** (public).
- Cloudflare Pages watches the `main` branch. **Every `git push` to `main` triggers a build +
  redeploy** (~1–2 minutes). There is no manual deploy step.

## One-time Cloudflare Pages setup
Do this once in the Cloudflare dashboard (these clicks need your login and can't be automated):

1. Log in at https://dash.cloudflare.com with **email + password** (avoid the "sign in with
   GitHub" social button).
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorize GitHub if prompted, then pick the **`caring-hearts-care`** repo.
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Production branch:** `main`
5. **Save and Deploy.** Cloudflare builds and gives you a `https://caring-hearts-care.pages.dev`
   URL (the exact subdomain may vary).

## After the first deploy
1. Put the real Pages URL into **`astro.config.mjs`** (`site:`) and **`public/robots.txt`**
   (`Sitemap:`), then `git push` again so canonical URLs, OpenGraph tags and the sitemap are
   correct.
2. **Before going live, set the real values in `src/data/site.ts`:**
   - `phone` / `phoneHref` (placeholder `(301) 555-0142`)
   - `email` (placeholder `care@caringheartscare.com`)
   - `web3formsKey` — get a free key at https://web3forms.com so the contact & careers forms
     deliver mail. Then push.
3. Spot-check the live site on desktop + mobile.

## Custom domain (caringheartscare.com) — when ready
In Cloudflare Pages → your project → **Custom domains → Set up a custom domain**, add
`caringheartscare.com` (and `www`). Update DNS as Cloudflare instructs. Then update `site:` in
`astro.config.mjs` and `Sitemap:` in `robots.txt` to the custom domain and push.

## Forms note
GitHub/Cloudflare static hosting has no server, so the contact & careers forms submit to
**Web3Forms** (client-side `fetch` to `https://api.web3forms.com/submit`). The honeypot field
`botcheck` filters bots. If you later prefer a Cloudflare Pages Function, you can swap the form
`fetch` target — but Web3Forms needs no backend.
