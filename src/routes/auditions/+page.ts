import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type Auditions } from '../../kontent-types';

export const load: PageLoad = async () => {
	const auditionsInfo = (await kontentConnector().item<Auditions>('upcoming_auditions').toPromise())
		.data.item.elements;

	return {
		auditionsInfo
	};
};
