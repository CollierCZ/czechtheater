import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type BasicInfoType } from '../../kontent-types';

export const load: PageLoad = async () => {
  const basicInfo = await kontentConnector()
    .item<BasicInfoType>('basic_info_about_czech_theater')
    .toPromise();

  const newsletterSignUpText =
    basicInfo.data.item.elements.newsletter_sign_up_text;

  return {
    newsletterSignUpText
  };
};
