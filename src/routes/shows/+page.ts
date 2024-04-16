import { kontentConnector, sortShows } from '$lib';
import type { PageLoad } from './$types';
import { type ShowSection } from '../../kontent-types';

export const load: PageLoad = async () => {
  const pastShowsSection = await kontentConnector()
    .item<ShowSection>('past_shows')
    .toPromise();

  const pastShows =
    pastShowsSection.data.item.elements.shows.linkedItems.sort(sortShows);

  return {
    pastShows
  };
};
