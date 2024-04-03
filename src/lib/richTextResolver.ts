// TODO: switch to Svelte version when compatible with Svelte 5
import {
	toHTML,
	type PortableTextOptions,
	type PortableTextTypeComponentOptions,
	type PortableTextMarkComponentOptions
} from '@portabletext/to-html';
import {
	nodeParse,
	transformToPortableText,
	resolveImage,
	toHTMLImageDefault,
	type PortableTextImage,
	type PortableTextComponent,
	type PortableTextExternalLink,
	type PortableTextInternalLink
} from '@kontent-ai/rich-text-resolver';
import type { Elements } from '@kontent-ai/delivery-sdk';

export const richTextResolver = ({
	links,
	linkedItems,
	value: richText
}: Elements.RichTextElement) => {
	const parsedTree = nodeParse(richText);
	const portableText = transformToPortableText(parsedTree);

	const portableTextComponents: PortableTextOptions = {
		components: {
			types: {
				image: ({ value }: PortableTextTypeComponentOptions<PortableTextImage>) => {
					// helper method for resolving images
					return resolveImage(value, toHTMLImageDefault);
				},
				component: ({ value }: PortableTextTypeComponentOptions<PortableTextComponent>) => {
					const linkedItem = linkedItems?.find(
						(item) => item.system.codename === value.component._ref
					);
					switch (linkedItem?.system.type) {
						default: {
							return `Resolver for type ${linkedItem?.system.type} not implemented.`;
						}
					}
				}
			},
			marks: {
				internalLink: ({
					children,
					value
				}: PortableTextMarkComponentOptions<PortableTextInternalLink>) => {
					if (!value) return '';
					const link = links?.find((item) => item.linkId === value.reference._ref);
					return `<a class="underline font-medium hover:no-underline focus:no-underline" href="/shows/${link?.urlSlug}">${children}</a>`;
				},
				link: ({ children, value }: PortableTextMarkComponentOptions<PortableTextExternalLink>) => {
					if (!value) return '';
					return `<a class="underline font-medium hover:no-underline focus:no-underline" href=${value.href!} data-new-window=${value['data-new-window']}>${children}</a>`;
				}
			}
		}
	};

	return toHTML(portableText, portableTextComponents);
};
