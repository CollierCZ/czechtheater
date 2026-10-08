import '@testing-library/jest-dom/vitest';
import './test/mockWindow';

// Mock sveltekit dev (env variables already in the file)
globalThis.__sveltekit_dev = {
  env: {}
};
