import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type PastShows } from '../../kontent-types';

export const load: PageLoad = async () => {
  const pastShowsSection = await kontentConnector()
    .item<PastShows>('past_shows')
    .depthParameter(2)
    .toPromise();

  const pastSeasons =
    pastShowsSection.data.item.elements.seasons.linkedItems;

  return {
    pastSeasons
  };
};
