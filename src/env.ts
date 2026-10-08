import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  PUBLIC_KONTENT_ENVIRONMENT_ID: { public: true },
  PUBLIC_KONTENT_PREVIEW: { public: true },
  PUBLIC_KONTENT_PREVIEW_API_KEY: { public: true }
});
