import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    // syntaxHighlight: 'shiki',
    // shikiConfig: { theme: 'dracula' },
    drafts: true
  }), svelte(), preact()],
  output: "server",
  adapter: vercel()
});