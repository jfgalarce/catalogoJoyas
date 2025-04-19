// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  output: 'server',
  adapter: vercel({
    // Opcional: fuerza el runtime a Node.js 20
    runtime: 'nodejs20.x',
  }),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});