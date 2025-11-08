import { kontentConnector } from '$lib';
import type { LayoutLoad } from './$types';
import { type BasicInfoType } from '../kontent-types';

export const prerender = true;

export const load: LayoutLoad = async () => {
  const basicInfo = await kontentConnector()
    .item<BasicInfoType>('basic_info_about_czech_theater')
    .toPromise();

  const logo = basicInfo.data.item.elements.logo.value[0];

  return {
    logo
  };
};
