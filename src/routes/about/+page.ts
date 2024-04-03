import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type BasicInfo } from '../../kontent-types';

export const load: PageLoad = async () => {
	const basicInfo = await kontentConnector()
		.item<BasicInfo>('basic_info_about_czech_theater')
		.toPromise();

	const aboutUsText = basicInfo.data.item.elements.about_us;

	return {
		aboutUsText
	};
};
