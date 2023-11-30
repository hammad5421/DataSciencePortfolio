import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://austinpoor.com/",
  integrations: [
    tailwind(), 
    mdx({
      drafts: true,
    }), 
    prefetch({
      selector: "a[href^='/blog']",
    }), 
    sitemap(),
  ],
  output: "server",
  adapter: cloudflare({}),
  redirects: {
    "/github": "https://github.com/a-poor",
    "/twitter": "https://twitter.com/austin_poor",
    "/mastodon": "https://mastodon.social/@austinpoor",
    "/linkedin": "https://www.linkedin.com/in/austinpoor",
  },
});
