import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://austinpoor.com/",
  integrations: [
    tailwind(), 
    mdx({
    // syntaxHighlight: 'shiki',
    // shikiConfig: { theme: 'dracula' },
    drafts: true
    }), 
    prefetch({
      selector: "a[href^='/blog']",
    }), 
    sitemap(),
  ],
  output: "static",
  adapter: vercel({
    analytics: true,
  })
});