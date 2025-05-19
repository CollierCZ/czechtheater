import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import ValuesPage from './+page.svelte';
import { ElementType } from '@kontent-ai/delivery-sdk';

test('values page has the right header and text', () => {
  render(ValuesPage, {
    data: {
      values: {
        name: "values",
        type: ElementType.RichText,
        linkedItems: [
          {
            name: "Community",
            description: "We build communities"
          }
        ]
    }}
  });

  const heading = screen.getByRole('heading');
  const child = within(heading).getByText('Our Values');

  expect(child).toBeInTheDocument();
});
