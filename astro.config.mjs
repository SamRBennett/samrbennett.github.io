// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain served via public/CNAME. Do NOT set `base` for a
// <username>.github.io user site.
export default defineConfig({
  site: 'https://curiositymaxxing.xyz',
  integrations: [sitemap()],
});
