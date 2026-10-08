import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: 'public',
        assets: 'public',
        fallback: '404.html'
      })
    }),
    tailwindcss()
  ]
});
