import { render, screen, within } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';

import { ElementType } from "@kontent-ai/delivery-sdk"

import AboutPage from './+page.svelte';

const aboutTextTest = 'We are so awesome!';

test('about page has the right header and text', () => {
	render(AboutPage, {
		data: { aboutUsText: { name: 'about_us', type: ElementType.RichText, value: `<p>${aboutTextTest}</p>`, links: [], images: [], linkedItemCodenames: [], linkedItems: [] } }
	});

	const heading = screen.getByRole('heading');
	const child = within(heading).getByText('About Czech Theater');

	const aboutText = screen.getByText(aboutTextTest);

	expect(child).toBeInTheDocument();
	expect(aboutText).toBeInTheDocument();
});
