// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://jptolozac.github.io',
  base: 'prosperidad_union'
});
