import { createDeliveryClient } from '@kontent-ai/delivery-sdk';
import { PUBLIC_KONTENT_ENVIRONMENT_ID } from '$env/static/public';

export const kontentConnector = () => {
  if (!PUBLIC_KONTENT_ENVIRONMENT_ID) {
    throw Error(
      'Define your Kontent.ai environment ID as an environment variable'
    );
  }
  return createDeliveryClient({
    environmentId: PUBLIC_KONTENT_ENVIRONMENT_ID
  });
};
