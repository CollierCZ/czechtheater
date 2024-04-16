import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import Gallery from '../Gallery.svelte';
import { commonImageProperties } from '$lib/Tests/sharedData';

const testImages = [
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
];

test('gallery exists with three images', () => {
  render(Gallery, { images: testImages });

  const images1 = screen.getAllByAltText('The first image');
  const images2 = screen.getAllByAltText('The second image');
  const images3 = screen.getAllByAltText('');

  expect(images1).toHaveLength(1);
  expect(images2).toHaveLength(1);
  expect(images3).toHaveLength(1);
});

// TODO: add tests for interacting with the gallery
