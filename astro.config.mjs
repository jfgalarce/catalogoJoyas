// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from '@astrojs/node';
// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});