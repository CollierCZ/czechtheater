import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import AboutPage from './+page.svelte';
import { basicRichTextValues, sharedLogo } from '$lib/Tests/sharedData';

const aboutTextTest = 'We are so awesome!';

test('about page has the right header and text', () => {
  render(AboutPage, {
    data: {
      aboutUsText: {
        name: 'about_us',
        value: `<p>${aboutTextTest}</p>`,
        ...basicRichTextValues
      },
      logo: sharedLogo
    }
  });

  const heading = screen.getByRole('heading');
  const child = within(heading).getByText('About Czech Theater');

  const aboutText = screen.getByText(aboutTextTest);

  expect(child).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
});
