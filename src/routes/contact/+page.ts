import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type BasicInfo } from '../../kontent-types';

export const load: PageLoad = async () => {
	const basicInfo = await kontentConnector()
		.item<BasicInfo>('basic_info_about_czech_theater')
		.toPromise();

	const contactInfo = basicInfo.data.item.elements.contact_info;
	const socialMedia = basicInfo.data.item.elements.social_media.value.split(',');

	return {
		contactInfo,
		socialMedia
	};
};
