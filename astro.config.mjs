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
  redirects: {
    "/github": "https://github.com/a-poor",
    "/twitter": "https://twitter.com/austin_poor",
    "/mastodon": "https://mastodon.social/@austinpoor",
    "/linkedin": "https://www.linkedin.com/in/austinpoor",
  },
});
