import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import NewsletterPage from './+page.svelte';
import {
  newsletterEditionData,
  sharedLogo
} from '$lib/Tests/sharedData';

test('newsletter page has the right headers and text', () => {
  render(NewsletterPage, {
    data: {
      logo: sharedLogo,
      newsletterEditionData: newsletterEditionData
    }
  });

  const title = screen.getByRole('heading', { level: 1 });
  const firstHeading = within(title).getByText(`Behind the Curtain ${newsletterEditionData.elements.month_and_year.value}`);

  expect(firstHeading).toBeInTheDocument();
});