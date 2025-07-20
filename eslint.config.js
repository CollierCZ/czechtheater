// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintSvelteParser from 'svelte-eslint-parser';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.svelte']
      },
      sourceType: 'module',
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  },
  {
    ignores: [
      '!.env.example',
      '.DS_Store',
      '.env.*',
      '.env',
      '.svelte-kit',
      'coverage',
      'node_modules',
      'package-lock.json',
      'pnpm-lock.yaml',
      'public',
      'src/kontent-types',
      'static/sw.js',
      'yarn.lock'
    ]
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: eslintSvelteParser,
      parserOptions: {
        parser: tseslint.parser
      }
    }
  }
];
