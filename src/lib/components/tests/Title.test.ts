import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import TitleTest from './Title.test.svelte';

test('title renders properly', () => {
	render(TitleTest);

	const heading = screen.getByRole('heading');
	const child = within(heading).getByTestId('child');

	expect(child).toBeInTheDocument();
});
