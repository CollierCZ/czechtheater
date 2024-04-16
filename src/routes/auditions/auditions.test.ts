import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import AuditionsPage from './+page.svelte';
import { basicRichTextValues, sharedLogo } from '$lib/Tests/sharedData';
import { ElementType } from '@kontent-ai/delivery-sdk';

const auditionDescriptionText = 'Auditions coming soon!';

const basicAuditionsInfo = {
  audition_date: {
    name: 'audition_date',
    type: ElementType.DateTime,
    value: '',
    displayTimeZone: null
  },
  link_to_audition_event: {
    name: 'link_to_audition_event',
    type: ElementType.Text,
    value: ''
  },
  upcoming_auditions_description: {
    name: 'upcoming_auditions_description',
    value: `<p>${auditionDescriptionText}</p>`,
    ...basicRichTextValues
  }
};

const eventDateText = /^Audition Date: /;
const eventLinkText = 'Audition Event';

test('basic auditions page has the right header and text and no date or link', () => {
  render(AuditionsPage, {
    data: {
      auditionsInfo: basicAuditionsInfo,
      logo: sharedLogo
    }
  });

  const heading = screen.getByRole('heading');
  const child = within(heading).getByText('Auditions');

  const aboutText = screen.getByText(auditionDescriptionText);

  const auditionDate = screen.queryByText(eventDateText);
  const auditionLink = screen.queryByText(eventLinkText);

  expect(child).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
  expect(auditionDate).not.toBeInTheDocument();
  expect(auditionLink).not.toBeInTheDocument();
});

test('auditions page with link displays the link', () => {
  const auditionInfoWithLink = {
    ...basicAuditionsInfo,
    link_to_audition_event: {
      ...basicAuditionsInfo.link_to_audition_event,
      value: 'https://example.org'
    }
  };
  render(AuditionsPage, {
    data: {
      auditionsInfo: auditionInfoWithLink,
      logo: sharedLogo
    }
  });

  const auditionLink = screen.queryByText(eventLinkText);

  expect(auditionLink).toBeInTheDocument();
});

test('auditions page with event date displays the date', () => {
  const auditionInfoWithEventDate = {
    ...basicAuditionsInfo,
    audition_date: {
      ...basicAuditionsInfo.audition_date,
      value: '2024-05-17',
      displayTimeZone: 'CEST'
    }
  };
  render(AuditionsPage, {
    data: {
      auditionsInfo: auditionInfoWithEventDate,
      logo: sharedLogo
    }
  });

  const auditionDate = screen.queryByText(eventDateText);

  expect(auditionDate).toBeInTheDocument();
});
