import { kontentConnector } from '$lib';
import type { LayoutServerLoad } from './$types';
import { type TheaterFactType } from '../../kontent-types';

// Using this variable together with prerendering works as a cache
// So API should only be called once for all children
let cachedData: TheaterFact[] = [];

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  if (cachedData.length > 0) {
    return { facts: cachedData };
  }

  const factsResponse = await kontentConnector()
    .items<TheaterFactType>()
    .type('theater_fact')
    .toPromise();

  cachedData = factsResponse.data.items;
  return { facts: cachedData };
};
