import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type TheaterFact } from '../../kontent-types';

export const load: PageLoad = async () => {
	const factsResponse = await kontentConnector()
		.items<TheaterFact>()
		.type('theater_fact')
		.toPromise();

	const facts = factsResponse.data.items;

	return {
		facts
	};
};
