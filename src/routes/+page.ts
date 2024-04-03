import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type ShowSection } from '../kontent-types';

export const load: PageLoad = async () => {
	const futureShowsSection = await kontentConnector().item<ShowSection>('future_shows').toPromise();

	const futureShows = futureShowsSection.data.item.elements.shows.linkedItems;

	return {
		futureShows
	};
};
