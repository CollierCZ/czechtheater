# Czech Theater

[![Netlify Status](https://api.netlify.com/api/v1/badges/b97fa77c-f82d-410f-8aee-c4c9f0f6f8b7/deploy-status)](https://app.netlify.com/sites/czechtheater/deploys)
[![Build Status](https://travis-ci.com/CollierCZ/czechtheater.svg?branch=master)](https://travis-ci.com/CollierCZ/czechtheater)
[![Maintainability](https://api.codeclimate.com/v1/badges/b94c000265e7e4214395/maintainability)](https://codeclimate.com/github/CollierCZ/czechtheater/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b94c000265e7e4214395/test_coverage)](https://codeclimate.com/github/CollierCZ/czechtheater/test_coverage)

A [website](https://czechtheater.cz) for an amateur theater in Brno built using [SvelteKit](https://kit.svelte.dev/) with content pulled from [Kontent.ai](https://kontent.ai).

## Run in development

To run the site in development, follow these steps:

1. Install dependencies by running `npm install`.

2. Add your Kontent.ai environment ID in a `.env` file:

   ```ini
   PUBLIC_KONTENT_ENVIRONMENT_ID=abc123
   ```

3. Start a development server:

   ```bash
   npm run dev

   # or start the server and open the app in a new browser tab
   npm run dev:open
   ```

## Build the site

To create a production version of your app, follow these steps:

1. Add your Kontent.ai environment ID to the environment:

   ```bash
   export PUBLIC_KONTENT_ENVIRONMENT_ID=abc123
   ```

2. Build the site:

   ```bash
   npm run build
   ```

You can preview the production build by running `npm run preview`.

## Content model

You can find the model for the content types in Kontent.ai in the [src/kontent-types directory](./src/kontent-types).

They were generated using the [Kontent.ai Model Generator](https://github.com/kontent-ai/model-generator-js).

### Generate new types

If the content model changes, you can generate new types.
You need a [Management API key](https://kontent.ai/learn/docs/apis/openapi/management-api-v2/#tag/API-keys).
Then run this command:

```bash
npx kontent-generate --exportRoles=false --exportWebhooks=false --outputDir=./src/kontent-types --environmentId=<ENVIRONMENT_ID> --apiKey=<API_KEY>
```
