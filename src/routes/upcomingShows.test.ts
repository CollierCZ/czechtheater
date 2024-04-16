import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import UpcomingShowsPage from './+page.svelte';
import {
  numberOfShowDescriptionParagraphs,
  sharedLogo,
  showData,
  showDescriptionText,
  showImageText,
  showName
} from '$lib/Tests/sharedData';

describe('Show listing page', () => {
  it('should include the title, description, and image', () => {
    render(UpcomingShowsPage, {
      data: {
        futureShows: [showData],
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

  it('should include a ticket link when necessary', () => {
    const showDataWithTicketLink = structuredClone(showData);
    showDataWithTicketLink.elements.ticket_link.value = 'https://example.org';
    render(UpcomingShowsPage, {
      data: {
        futureShows: [showDataWithTicketLink],
        logo: sharedLogo
      }
    });

    const ticketLink = screen.getByText('Tickets');

    expect(ticketLink).toBeInTheDocument();
  });
});
