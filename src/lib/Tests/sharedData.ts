import { type ElementModels, ElementType } from '@kontent-ai/delivery-sdk';
import type { Show } from '../../kontent-types';

export const commonImageProperties = {
  type: 'image/png',
  width: 24,
  height: 24,
  size: 256,
  renditions: null
};

export const sharedLogo: ElementModels.AssetModel = {
  url: 'https://example.org/image1.png',
  description: 'The first image',
  name: 'image1.png',
  ...commonImageProperties
};

export const basicRichTextValues = {
  type: ElementType.RichText,
  links: [],
  images: [],
  linkedItemCodenames: [],
  linkedItems: []
};

export const commonSystemProperties = {
  id: '12345',
  name: 'test',
  codename: 'test',
  lastModified: new Date().toISOString(),
  language: 'en-US',
  collection: 'default',
  sitemapLocations: [],
  workflowStep: 'published',
  workflow: 'default'
};

export const firstFactText = 'Czech Theater is great!';
export const secondFactText = 'A different fact about Czech Theater';
export const factNoImageText = 'This fact has no image';

const sharedFactImageProperties = {
  name: 'Image',
  type: ElementType.Asset
};

export const firstImageDescription = 'An image accompanying a fact';

const sharedDescriptionProperties = {
  name: 'description',
  ...basicRichTextValues
};

const factKontenType = 'theater_fact';
export const testFacts = [
  {
    elements: {
      description: {
        value: `<p>${firstFactText}</p>`,
        ...sharedDescriptionProperties
      },
      image: {
        value: [
          {
            url: 'https://example.org/image1.png',
            description: firstImageDescription,
            name: 'image1.png',
            ...commonImageProperties
          }
        ],
        ...sharedFactImageProperties
      }
    },
    system: {
      type: factKontenType,
      ...commonSystemProperties
    }
  },
  {
    elements: {
      description: {
        value: `<p>${secondFactText}</p>`,
        ...sharedDescriptionProperties
      },
      image: {
        value: [],
        ...sharedFactImageProperties
      }
    },
    system: {
      type: factKontenType,
      ...commonSystemProperties
    }
  }
];

export const showDescriptionText = 'A brilliant show.';
export const showImageText = 'A brilliant image';
export const showName = 'Awesome Show';
export const numberOfShowDescriptionParagraphs = 3;
export const showData: Show = {
  elements: {
    description: {
      value: `<p>${showDescriptionText}</p>`.repeat(
        numberOfShowDescriptionParagraphs
      ),
      ...sharedDescriptionProperties
    },
    gallery: {
      name: 'Gallery',
      type: ElementType.Asset,
      value: []
    },
    gallery_with_captions: {
      name: 'Gallery with captions',
      type: ElementType.RichText,
      linkedItems: [],
      value: '',
      images: [],
      linkedItemCodenames: [],
      links: []
    },
    main_image: {
      name: 'Main image',
      type: ElementType.Asset,
      value: [
        {
          url: 'https://example.org/image1.png',
          description: showImageText,
          name: 'image1.png',
          ...commonImageProperties
        }
      ]
    },
    name: {
      type: ElementType.Text,
      name: 'Name',
      value: showName
    },
    premiere: {
      type: ElementType.DateTime,
      value: new Date().toISOString(),
      name: 'Premiere',
      displayTimeZone: 'Europe/Prague'
    },
    short_description: {
      name: 'Short description',
      type: ElementType.Text,
      value: showDescriptionText
    },
    ticket_link: {
      type: ElementType.Text,
      name: 'Ticket link',
      value: ''
    },
    url: {
      type: ElementType.UrlSlug,
      name: 'URL',
      value: 'slug'
    }
  },
  system: {
    type: 'show',
    ...commonSystemProperties
  }
};
