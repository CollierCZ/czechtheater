import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type StaticContentType } from '../../kontent-types';

export const load: PageLoad = async () => {
  const basicInfo = await kontentConnector()
    .item<StaticContentType>('newsletter_sign_up_text')
    .toPromise();

  const newsletterSignUpText = basicInfo.data.item.elements.content;

  return {
    newsletterSignUpText
  };
};
