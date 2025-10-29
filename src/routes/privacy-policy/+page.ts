import { kontentConnector } from '$lib';
import type { PageLoad } from './$types';
import { type StaticContentType } from '../../kontent-types';

export const load: PageLoad = async () => {
  const staticContent = await kontentConnector()
    .item<StaticContentType>('privacy_policy')
    .toPromise();

  const privacyPolicyText = staticContent.data.item.elements.content;

  const title = staticContent.data.item.elements.title.value;

  const slug = staticContent.data.item.elements.url_slug.value;

  return {
    privacyPolicyText,
    slug,
    title
  };
};
