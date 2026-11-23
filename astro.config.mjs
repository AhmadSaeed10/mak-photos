import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Render every page on request in a Vercel serverless function.
  // To go back to a fully static build, remove `output` and `adapter`
  // (or set individual pages to `export const prerender = true`).
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
