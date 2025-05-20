import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import ValuesPage from './+page.svelte';
import {
  basicRichTextValues,
  sharedLogo,
  valueData
} from '$lib/Tests/sharedData';

test('values page has the right header and text', () => {
  render(ValuesPage, {
    data: {
      values: {
        name: 'values',
        value: '',
        ...basicRichTextValues,
        linkedItems: [valueData]
      },
      logo: sharedLogo
    }
  });

  const heading = screen.getByRole('heading');
  const child = within(heading).getByText('Our Values');

  expect(child).toBeInTheDocument();
});
