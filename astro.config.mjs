import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // output: 'server',
  // site: 'http://localhost:3000',
  // prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // adapter: cloudflare(),
});
