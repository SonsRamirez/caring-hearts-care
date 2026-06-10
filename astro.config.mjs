// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// `site` is the production custom domain (used for the sitemap + canonical/OpenGraph URLs).
// https://astro.build/config
export default defineConfig({
  site: 'https://caringheartscare.com',
  output: 'static',
  integrations: [
    icon(),
    sitemap(),
  ],
});
