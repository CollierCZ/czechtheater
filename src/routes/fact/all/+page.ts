import type { PageLoad } from './$types';

// until https://github.com/sveltejs/kit/issues/12622 is solved
// eslint-disable-next-line @typescript-eslint/unbound-method
export const load: PageLoad = async ({ parent }) => {
  const { facts } = await parent();

  return {
    facts
  };
};
