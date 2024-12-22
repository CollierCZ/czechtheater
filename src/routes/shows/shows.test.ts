import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import PastShowsPage from './+page.svelte';
import {
  seasonData,
  sharedLogo,
  showData,
  showDescriptionText,
  showImageText,
  showName
} from '$lib/Tests/sharedData';

const secondShow = structuredClone(showData);
const secondShowName = 'A Second Show';
secondShow.elements.premiere.value = new Date('2024-01-01').toISOString();
secondShow.elements.name.value = secondShowName;

describe('Show listing page', () => {
  it('should include the title, description, and image', () => {
    render(PastShowsPage, {
      data: {
        pastSeasons: [seasonData],
        logo: sharedLogo
      }
    });

    const showDescription = screen.getByText(showDescriptionText);
    const showImage = screen.getByAltText(showImageText);
    const showTitle = screen.getByText(showName);

    expect(showDescription).toBeInTheDocument();
    expect(showImage).toBeInTheDocument();
    expect(showTitle).toBeInTheDocument();
  });
});
