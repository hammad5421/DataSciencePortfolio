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
});