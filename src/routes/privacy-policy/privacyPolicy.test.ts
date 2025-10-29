import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import NewsletterPage from './+page.svelte';
import { basicRichTextValues, sharedLogo } from '$lib/Tests/sharedData';

const privacyPolicyTextTest = 'Be private. Do good.';
const titleTest = 'Privacy Policy';

test('about page has the right headers and text', () => {
  render(NewsletterPage, {
    data: {
      privacyPolicyText: {
        name: 'content',
        value: `<p>${privacyPolicyTextTest}</p>`,
        ...basicRichTextValues
      },
      slug: 'privacy-policy',
      title: titleTest,
      logo: sharedLogo
    }
  });

  const title = screen.getByRole('heading', { level: 1 });
  const firstHeading = within(title).getByText(titleTest);

  const privacyPolicyText = screen.getByText(privacyPolicyTextTest);

  expect(firstHeading).toBeInTheDocument();
  expect(privacyPolicyText).toBeInTheDocument();
});
