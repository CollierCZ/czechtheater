import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type FutureShows } from '../kontent-types';

export const load: PageLoad = async () => {
  const futureShowsSection = await kontentConnector()
    .item<FutureShows>('future_shows')
    .depthParameter(2)
    .toPromise();

  const futureShows = futureShowsSection.data.item.elements.shows.linkedItems;

  return {
    futureShows
  };
};
