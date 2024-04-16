import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import PastShowsPage from './+page.svelte';
import {
  sharedLogo,
  showData,
  showDescriptionText,
  showImageText,
  showName
} from '$lib/Tests/sharedData';
import { sortShows } from '$lib';

const secondShow = structuredClone(showData);
const secondShowName = 'A Second Show';
secondShow.elements.premiere.value = new Date('2024-01-01').toISOString();
secondShow.elements.name.value = secondShowName;

describe('Show listing page', () => {
  it('should include the title, description, and image', () => {
    render(PastShowsPage, {
      data: {
        pastShows: [showData],
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

  it('should sort with older shows first', () => {
    render(PastShowsPage, {
      data: {
        pastShows: [showData, secondShow].sort(sortShows),
        logo: sharedLogo
      }
    });

    const showTitles = screen.getAllByRole('heading');

    expect(showTitles[1].textContent).toEqual(secondShowName);
  });
});
