import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type ShowType } from '../../../kontent-types';

export const load: PageLoad = async ({ params }) => {
  const showData = (
    await kontentConnector()
      .items<ShowType>()
      .depthParameter(2)
      .type('show')
      .equalsFilter('elements.url', params.slug)
      .toPromise()
  ).data.items[0];

  return {
    showData
  };
};
