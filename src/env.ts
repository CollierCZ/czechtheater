import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_KONTENT_ENVIRONMENT_ID: {
    description:
      'The ID of the environment in Kontent.ai to fetch content from',
    public: true,
    static: true
  },
  PUBLIC_KONTENT_PREVIEW: {
    description: 'Whether to fetch draft content',
    public: true,
    static: true,
    schema: ((value: string | undefined) => value)
  },
  PUBLIC_KONTENT_PREVIEW_API_KEY: {
    description: 'The key to fetch draft content',
    public: true,
    static: true,
    schema: ((value: string | undefined) => value)
  }
});
