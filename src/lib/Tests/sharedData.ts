import { type ElementModels, ElementType } from '@kontent-ai/delivery-sdk';

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
	lastModified: new Date().toDateString(),
	language: 'en-US',
	collection: 'default',
	sitemapLocations: [],
	workflowStep: 'published',
	workflow: 'default'
};

export const firstFactText = 'Czech Theater is great!';
export const secondFactText = 'A different fact about Czech Theater';

const sharedFactImageProperties = {
	name: 'Image',
	type: ElementType.Asset
};

export const firstImageDescription = 'An image accompanying a fact';
export const secondImageDescription = 'A second image accompanying a second fact';

const sharedDescriptionProperties = {
	name: 'about_us',
	...basicRichTextValues
};

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
			type: 'theater_fact',
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
				value: [
					{
						url: 'https://example.org/image2.png',
						description: secondImageDescription,
						name: 'image2.png',
						...commonImageProperties
					}
				],
				...sharedFactImageProperties
			}
		},
		system: {
			type: 'theater_fact',
			...commonSystemProperties
		}
	}
];
