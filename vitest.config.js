import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : []
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    coverage: {
      include: ['src/**'],
      exclude: ['src/kontent-types/**', '**/+page.ts', '**/+layout.server.ts']
    },
    server: {
      deps: {
        inline: ['clsx']
      }
    },
    alias: {
      '@testing-library/svelte': '@testing-library/svelte/svelte5'
    }
  }
}));
