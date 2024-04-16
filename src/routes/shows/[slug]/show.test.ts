import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import ShowPage from './+page.svelte';
import {
	numberOfShowDescriptionParagraphs,
	sharedLogo,
	showData,
	showDescriptionText,
	showImageText,
	showName
} from '$lib/Tests/sharedData';

describe('Show page', () => {
	it('should include the title, description, and image', () => {
		render(ShowPage, {
			data: {
				showData: showData,
				logo: sharedLogo
			}
		});

		const showDescription = screen.getAllByText(showDescriptionText);
		const showImage = screen.getByAltText(showImageText);
		const showTitle = screen.getByText(showName);

		// Multiple paragraphs with the same text
		expect(showDescription.length).toEqual(numberOfShowDescriptionParagraphs);
		expect(showImage).toBeInTheDocument();
		expect(showTitle).toBeInTheDocument();
	});
});
