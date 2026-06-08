// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the real Cloudflare Pages URL after the first deploy
// (e.g. https://caring-hearts-care.pages.dev), then to the custom domain when live.
// https://astro.build/config
export default defineConfig({
  site: 'https://caring-hearts-care.pages.dev',
  output: 'static',
  integrations: [
    icon(),
    sitemap(),
  ],
});
