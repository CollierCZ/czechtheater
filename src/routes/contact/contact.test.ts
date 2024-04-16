import { render, screen, within } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import AboutPage from './+page.svelte';
import { basicRichTextValues, sharedLogo } from '$lib/Tests/sharedData';

const contactTextTest = 'Reach us at our office.';
const contactTextObject = {
  name: 'about_us',
  value: `<p>${contactTextTest}</p>`,
  ...basicRichTextValues
};

test('contact page displays right header and text with no socials', () => {
  render(AboutPage, {
    data: {
      contactInfo: contactTextObject,
      socialMedia: [],
      logo: sharedLogo
    }
  });

  const heading = screen.getByRole('heading');
  const child = within(heading).getByText('Contact Information');

  const aboutText = screen.getByText(contactTextTest);

  expect(child).toBeInTheDocument();
  expect(aboutText).toBeInTheDocument();
});

test('contact page displays one social correctly', () => {
  render(AboutPage, {
    data: {
      contactInfo: contactTextObject,
      socialMedia: ['https://facebook.com'],
      logo: sharedLogo
    }
  });

  const facebookLink = screen.getByTitle('Facebook');

  expect(facebookLink).toBeInTheDocument();
});

test('contact page displays all socials correctly', () => {
  render(AboutPage, {
    data: {
      contactInfo: contactTextObject,
      socialMedia: [
        'https://facebook.com',
        'https://instagram.com',
        'mailto:me'
      ],
      logo: sharedLogo
    }
  });

  const facebookLink = screen.getByTitle('Facebook');
  const instagramLink = screen.getByTitle('Instagram');
  const emailLink = screen.getByTitle('Email');

  expect(facebookLink).toBeInTheDocument();
  expect(instagramLink).toBeInTheDocument();
  expect(emailLink).toBeInTheDocument();
});
