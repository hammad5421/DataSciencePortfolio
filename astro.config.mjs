import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";


export default defineConfig({
  site: "https://austinpoor.com/",
  prefetch: true,
  integrations: [
    tailwind(), 
    mdx({drafts: true}),
    sitemap(),
  ],
  output: "server",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
});
