import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type NewsletterType } from '../../../kontent-types';

export const load: PageLoad = async ({ params }) => {
  const newsletterEditionData = (
    await kontentConnector()
      .items<NewsletterType>()
      .depthParameter(2)
      .type('newsletter')
      .equalsFilter('elements.slug', params.slug)
      .toPromise()
  ).data.items[0];

  return {
    newsletterEditionData
  };
};
