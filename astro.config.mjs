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
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://austinpoor.com/",
  integrations: [
    tailwind(), 
    mdx({
      drafts: true
    }), 
    prefetch({
      selector: "a[href^='/blog']"
    }),
    sitemap(), 
    partytown({
      config: { 
        forward: ["dataLayer.push"] 
      },
    }),
  ],
  output: "static",
  adapter: vercel()
});