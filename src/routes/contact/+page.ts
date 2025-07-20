import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type BasicInfoType } from '../../kontent-types';

export const load: PageLoad = async () => {
  const basicInfo = await kontentConnector()
    .item<BasicInfoType>('basic_info_about_czech_theater')
    .toPromise();

  const contactInfo = basicInfo.data.item.elements.contact_info;
  const socialMedia =
    basicInfo.data.item.elements.social_media.value.split(',');

  return {
    contactInfo,
    socialMedia
  };
};
