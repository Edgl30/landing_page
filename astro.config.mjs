// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://edgl30.github.io',
  base: 'landing_page'
});
