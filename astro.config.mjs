// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://guysolan.github.io",
  base: "/frontend/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/vercel/serverless']
    }
  }
});