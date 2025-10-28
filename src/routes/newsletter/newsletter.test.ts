import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import NewsletterPage from './+page.svelte';
import { basicRichTextValues, sharedLogo } from '$lib/Tests/sharedData';

const newsletterSignUpTextTest = 'Sign up for the newsletter';

test('about page has the right headers and text', () => {
  render(NewsletterPage, {
    data: {
      newsletterSignUpText: {
        name: 'newsletter_sign_up_text',
        value: `<p>${newsletterSignUpTextTest}</p>`,
        ...basicRichTextValues
      },
      logo: sharedLogo
    }
  });

  const title = screen.getByRole('heading', { level: 1 });
  const firstHeading = within(title).getByText('Behind the Curtain');

  const newsletterSignUpText = screen.getByText(newsletterSignUpTextTest);

  expect(firstHeading).toBeInTheDocument();
  expect(newsletterSignUpText).toBeInTheDocument();
});
