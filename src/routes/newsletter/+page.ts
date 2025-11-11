import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import {
  type NewsletterType,
  type StaticContentType
} from '../../kontent-types';

export const load: PageLoad = async () => {
  const signupText = await kontentConnector()
    .item<StaticContentType>('newsletter_sign_up_text')
    .toPromise();

  const newsletterSignUpText = signupText.data.item.elements.content;

  const newsletters = await kontentConnector()
    .items<NewsletterType>()
    .type('newsletter')
    .orderByDescending('elements.publish_date')
    .toPromise();

  const newsletterEditions = newsletters.data.items;

  return {
    newsletterEditions,
    newsletterSignUpText
  };
};
