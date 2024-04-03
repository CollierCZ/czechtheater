import { kontentConnector } from '$lib';
import type { LayoutLoad } from './$types';
import { type BasicInfo } from '../kontent-types';

export const load: LayoutLoad = async () => {
	const basicInfo = await kontentConnector()
		.item<BasicInfo>('basic_info_about_czech_theater')
		.toPromise();

	const logo = basicInfo.data.item.elements.favicon.value[0];

	return {
		logo
	};
};
