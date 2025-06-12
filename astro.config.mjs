import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: "https://crms.es",
  integrations: [tailwind(), mdx(), sitemap(), icon(), sitemap()],
});
