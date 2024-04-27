import { isInaccessible, render, screen } from '@testing-library/svelte';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

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

describe('Gallery', () => {
  let user: UserEvent;
  beforeEach(() => {
    render(Gallery, { images: testImages });
    user = userEvent.setup();
  });

  it('exists with three images, only the first accessible', () => {
    const image1 = screen.getByAltText(testImages[0].description);
    const image2 = screen.getByAltText(testImages[1].description);
    const image3 = screen.getByAltText(testImages[2].description);

    expect(!isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(isInaccessible(image3));
  });

  it('allows navigating using next and previous buttons', async () => {
    const image1 = screen.getByAltText(testImages[0].description);
    const image2 = screen.getByAltText(testImages[1].description);
    const image3 = screen.getByAltText(testImages[2].description);

    const nextButton = screen.getByText('Next image');
    const prevButton = screen.getByText('Previous image');

    await user.click(nextButton);

    expect(isInaccessible(image1));
    expect(!isInaccessible(image2));
    expect(isInaccessible(image3));

    await user.click(prevButton);

    expect(!isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(isInaccessible(image3));
  });

  it('allows scrolling back to the start (inifinite scroll)', async () => {
    const image1 = screen.getByAltText(testImages[0].description);
    const image2 = screen.getByAltText(testImages[1].description);
    const image3 = screen.getByAltText(testImages[2].description);

    const nextButton = screen.getByText('Next image');
    const prevButton = screen.getByText('Previous image');

    await user.click(nextButton);

    expect(isInaccessible(image1));
    expect(!isInaccessible(image2));
    expect(isInaccessible(image3));

    await user.click(nextButton);

    expect(isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(!isInaccessible(image3));

    await user.click(nextButton);

    expect(!isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(isInaccessible(image3));

    await user.click(prevButton);

    expect(isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(!isInaccessible(image3));
  });

  it('allows navigating with thumbnail buttons', async () => {
    const image1 = screen.getByAltText(testImages[0].description);
    const image2 = screen.getByAltText(testImages[1].description);
    const image3 = screen.getByAltText(testImages[2].description);

    const thumb1 = screen.getByAltText('Switch to image 1');
    const thumb2 = screen.getByAltText('Switch to image 2');

    await user.click(thumb2);

    expect(isInaccessible(image1));
    expect(!isInaccessible(image2));
    expect(isInaccessible(image3));

    await user.click(thumb1);

    expect(!isInaccessible(image1));
    expect(isInaccessible(image2));
    expect(isInaccessible(image3));
  });
});
