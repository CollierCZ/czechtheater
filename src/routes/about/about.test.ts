import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import AboutPage from './+page.svelte';
import { basicRichTextValues, sharedLogo, valueData } from '$lib/Tests/sharedData';

const aboutTextTest = 'We are so awesome!';

test('about page has the right headers and text', () => {
  render(AboutPage, {
    data: {
      aboutUsText: {
        name: 'about_us',
        value: `<p>${aboutTextTest}</p>`,
        ...basicRichTextValues
      },
      values: {
        name: 'values',
        value: '',
        ...basicRichTextValues,
        linkedItems: [valueData]
      },
      logo: sharedLogo
    }
  });

  const title = screen.getByRole('heading', {level: 1});
  const firstHeading = within(title).getByText('About Czech Theater');

  const heading = screen.getByRole('heading', {level: 2});
  const valuesHeading = within(heading).getByText('Our Values');

  const aboutText = screen.getByText(aboutTextTest);

  expect(firstHeading).toBeInTheDocument();
  expect(valuesHeading).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
});
