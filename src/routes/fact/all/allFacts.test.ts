import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import FactPage from './+page.svelte';
import {
	firstFactText,
	firstImageDescription,
	secondFactText,
	secondImageDescription,
	sharedLogo,
	testFacts
} from '$lib/Tests/sharedData';

describe('Fact listing page', () => {
	it('should include all descriptions and images', () => {
		render(FactPage, {
			data: {
				facts: testFacts,
				logo: sharedLogo
			}
		});

		const firstFactDescriptionText = screen.getByText(firstFactText);
		const firstFactImage = screen.getByAltText(firstImageDescription);
		const secondFactDescriptionText = screen.getByText(secondFactText);
		const secondFactImage = screen.getByAltText(secondImageDescription);

		expect(firstFactDescriptionText).toBeInTheDocument();
		expect(firstFactImage).toBeInTheDocument();
		expect(secondFactDescriptionText).toBeInTheDocument();
		expect(secondFactImage).toBeInTheDocument();
	});
});
