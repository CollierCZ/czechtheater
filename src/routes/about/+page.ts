import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type BasicInfoType } from '../../kontent-types';

export const load: PageLoad = async () => {
  const basicInfo = await kontentConnector()
    .item<BasicInfoType>('basic_info_about_czech_theater')
    .toPromise();

  const aboutUsText = basicInfo.data.item.elements.about_us;
  const values = basicInfo.data.item.elements.values;

  return {
    aboutUsText,
    values
  };
};
