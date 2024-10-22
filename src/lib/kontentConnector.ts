import { createDeliveryClient } from '@kontent-ai/delivery-sdk';
import {
  PUBLIC_KONTENT_ENVIRONMENT_ID,
  PUBLIC_KONTENT_PREVIEW_API_KEY,
  PUBLIC_KONTENT_PREVIEW
} from '$env/static/public';

export const kontentConnector = () => {
  if (!PUBLIC_KONTENT_ENVIRONMENT_ID) {
    throw Error(
      'Define your Kontent.ai environment ID as an environment variable (PUBLIC_KONTENT_ENVIRONMENT_ID)'
    );
  }
  if (PUBLIC_KONTENT_PREVIEW) {
    if (!PUBLIC_KONTENT_PREVIEW_API_KEY) {
      throw Error(
        'Define your Kontent.ai Delivery preview API key as an environment variable (PUBLIC_KONTENT_PREVIEW_API_KEY)'
      );
    }
    return createDeliveryClient({
      environmentId: PUBLIC_KONTENT_ENVIRONMENT_ID,
      previewApiKey: PUBLIC_KONTENT_PREVIEW_API_KEY,
      defaultQueryConfig: {
        usePreviewMode: true
      }
    });
  }
  return createDeliveryClient({
    environmentId: PUBLIC_KONTENT_ENVIRONMENT_ID
  });
};
