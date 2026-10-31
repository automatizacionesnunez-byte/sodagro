import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://sodagro.es",
  output: "static",
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap({
      filter: (page) => !page.includes("/404"),
    })],
});
