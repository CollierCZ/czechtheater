import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';

import Gallery from '../Gallery.svelte';
import type { ElementType } from '@kontent-ai/delivery-sdk';

const commonImageProperties = {
	type: 'image/png',
	width: 24,
	height: 24,
	size: 256,
	renditions: null
};
const testImages = {
	name: 'Gallery',
	type: 'asset' as ElementType,
	value: [
		{
			url: 'https://example.org/image1.png',
			description: 'The first image',
			name: 'image1.png',
			...commonImageProperties
		},
		{
			url: 'https://example.org/image2.png',
			description: 'The second image',
			name: 'image2.png',
			...commonImageProperties
		},
		{
			url: 'https://example.org/image3.png',
			description: '',
			name: 'image3.png',
			...commonImageProperties
		}
	]
};

test('gallery exists with three images', () => {
	render(Gallery, { images: testImages });

	const image1 = screen.getByAltText('The first image');
	const image2 = screen.getByAltText('The second image');
	const image3 = screen.getByAltText('');

	expect(image1).toBeInTheDocument();
	expect(image2).toBeInTheDocument();
	expect(image3).toBeInTheDocument();
});

// TODO: add tests for interacting with the gallery
