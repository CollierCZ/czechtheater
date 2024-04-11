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
