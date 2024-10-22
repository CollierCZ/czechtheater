import { createDeliveryClient } from '@kontent-ai/delivery-sdk';
import * as publicEnv from '$env/static/public';

export const kontentConnector = () => {
  if (!publicEnv.PUBLIC_KONTENT_ENVIRONMENT_ID) {
    throw Error(
      'Define your Kontent.ai environment ID as an environment variable (PUBLIC_KONTENT_ENVIRONMENT_ID)'
    );
  }
  if (publicEnv.PUBLIC_KONTENT_PREVIEW) {
    if (!publicEnv.PUBLIC_KONTENT_PREVIEW_API_KEY) {
      throw Error(
        'Define your Kontent.ai Delivery preview API key as an environment variable (PUBLIC_KONTENT_PREVIEW_API_KEY)'
      );
    }
    return createDeliveryClient({
      environmentId: publicEnv.PUBLIC_KONTENT_ENVIRONMENT_ID,
      previewApiKey: publicEnv.PUBLIC_KONTENT_PREVIEW_API_KEY,
      defaultQueryConfig: {
        usePreviewMode: true
      }
    });
  }
  return createDeliveryClient({
    environmentId: publicEnv.PUBLIC_KONTENT_ENVIRONMENT_ID
  });
};
