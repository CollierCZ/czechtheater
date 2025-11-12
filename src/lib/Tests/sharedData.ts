import { type ElementModels, ElementType } from '@kontent-ai/delivery-sdk';
import type { SeasonType, ShowType, ValueType } from '../../kontent-types';

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
  workflowStep: 'published',
  workflow: 'default'
} as const;

export const firstFactText = 'Czech Theater is great!';
export const secondFactText = 'A different fact about Czech Theater';
export const factNoImageText = 'This fact has no image';

const sharedFactImageProperties = { name: 'Image', type: ElementType.Asset };

export const firstImageDescription = 'An image accompanying a fact';

const sharedDescriptionProperties = {
  name: 'description',
  ...basicRichTextValues
};

const factKontentType = 'theater_fact' as const;

const firstTestFact = {
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
    type: factKontentType,
    ...commonSystemProperties,
    sitemapLocations: [],
    codename: 'test-fact-1'
  }
};

export const testFacts = [
  firstTestFact,
  {
    elements: {
      description: {
        value: `<p>${secondFactText}</p>`,
        ...sharedDescriptionProperties
      },
      image: { value: [], ...sharedFactImageProperties }
    },
    system: {
      type: factKontentType,
      ...commonSystemProperties,
      sitemapLocations: [],
      codename: 'test-fact-2'
    }
  }
];

export const showDescriptionText = 'A brilliant show.';
export const showImageText = 'A brilliant image';
export const showName = 'Awesome Show';
export const numberOfShowDescriptionParagraphs = 3;
export const showData: ShowType = {
  elements: {
    description: {
      value: `<p>${showDescriptionText}</p>`.repeat(
        numberOfShowDescriptionParagraphs
      ),
      ...sharedDescriptionProperties
    },
    gallery: { name: 'Gallery', type: ElementType.Asset, value: [] },
    gallery_with_captions: {
      name: 'Gallery with captions',
      value: '',
      ...basicRichTextValues
    },
    full_performance_link: {
      type: ElementType.Text,
      name: 'Full performance link',
      value: ''
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
    name: { type: ElementType.Text, name: 'Name', value: showName },
    premiere: {
      type: ElementType.DateTime,
      value: '2020-05-17',
      name: 'Premiere',
      displayTimeZone: 'Europe/Prague'
    },
    short_description: {
      name: 'Short description',
      type: ElementType.Text,
      value: showDescriptionText
    },
    ticket_link: { type: ElementType.Text, name: 'Ticket link', value: '' },
    trailer: { name: 'Trailer', value: '', ...basicRichTextValues },
    url: { type: ElementType.UrlSlug, name: 'URL', value: 'slug' }
  },
  system: {
    type: 'show',
    ...commonSystemProperties,
    sitemapLocations: [],
    codename: 'example_show'
  }
};

export const seasonData: SeasonType = {
  elements: {
    season_start_year: {
      name: 'Season start year',
      value: 2020,
      type: ElementType.Number
    },
    season_end_year: {
      name: 'Season end year',
      value: 2021,
      type: ElementType.Number
    },
    season_name: {
      type: ElementType.Text,
      name: 'Season name',
      value: 'The Lost Year'
    },
    shows: {
      type: ElementType.ModularContent,
      name: 'Shows',
      value: ['example_show'],
      linkedItems: [showData]
    }
  },
  system: {
    type: 'season',
    ...commonSystemProperties,
    sitemapLocations: [],
    codename: 'example_season'
  }
};

export const valueData: ValueType = {
  elements: {
    name: {
      type: ElementType.Text,
      name: 'value',
      value: 'Community'
    },
    description: {
      value: 'We build communities',
      name: 'description',
      ...basicRichTextValues
    },
    icon: {
      type: ElementType.Text,
      name: 'icon',
      value: ''
    }
  },
  system: {
    type: 'value',
    ...commonSystemProperties,
    sitemapLocations: [],
    codename: 'example_svalue'
  }
};

const newsletterKontentType = 'newsletter' as const;

export const newsletterEditionData = {
  elements: {
    month_and_year: {
      type: ElementType.Text,
      name: 'value',
      value: 'May 1982'
    },
    slug: {
      type: ElementType.Text,
      name: 'value',
      value: 'may-1982'
    },
    introduction: {
      name: 'introduction',
      value: 'Read me!',
      ...basicRichTextValues
    },
    upcoming_shows: {
      name: 'upcoming_shows',
      value: 'So much to see',
      ...basicRichTextValues
    },
    notes_from_production: {
      name: 'notes_from_production',
      value: 'Working hard',
      ...basicRichTextValues
    },
    intermission: {
      type: ElementType.ModularContent,
      name: 'intermission',
      value: ['test-fact-1'],
      linkedItems: [firstTestFact]
    },
    interview: {
      name: 'interview',
      value: 'I like Czech Theater',
      ...basicRichTextValues
    },
    past_play: {
      name: 'past_play',
      value: 'We did great',
      ...basicRichTextValues
    }
  },
  system: {
    type: newsletterKontentType,
    ...commonSystemProperties,
    sitemapLocations: [],
    codename: 'test-newsletter'
  }
};
