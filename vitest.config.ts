import { defineConfig } from 'vitest/config';
import type { ViteUserConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit(), svelteTesting()] as ViteUserConfig['plugins'],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : []
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    coverage: {
      include: ['src/**'],
      exclude: [
        'src/kontent-types/**',
        '**/+page.ts',
        '**/+layout.server.ts',
        '**/*.d.ts'
      ],
      reporter: ['lcovonly', 'text']
    },
    server: {
      deps: {
        inline: ['clsx']
      }
    }
  }
}));
