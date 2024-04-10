<script lang="ts">
	import {
		PortableText,
		type PortableTextComponents,
		type PortableTextTypeComponentOptions
	} from '@portabletext/svelte';
	import {
		nodeParse,
		transformToPortableText,
		resolveImage,
		toHTMLImageDefault,
		type PortableTextImage
	} from '@kontent-ai/rich-text-resolver';
	import type { Elements } from '@kontent-ai/delivery-sdk';

	import ExternalLink from './RichTextElements/ExternalLink.svelte';
	import InternalLink from './RichTextElements/InternalLink.svelte';
	import Paragraph from './RichTextElements/Paragraph.svelte';

	export let richTextElement: Elements.RichTextElement;

	let { links, linkedItems, value: richText } = richTextElement;
	const parsedTree = nodeParse(richText);
	const portableText = transformToPortableText(parsedTree);

	const portableTextComponents: PortableTextComponents = {
		types: {
			// TODO: Switch these for components
			image: ({ value }: PortableTextTypeComponentOptions<PortableTextImage>) => {
				// helper method for resolving images
				return resolveImage(value, toHTMLImageDefault);
			}
		},
		block: {
			normal: Paragraph
		},
		marks: {
			internalLink: InternalLink,
			link: ExternalLink
		}
	};
</script>

<PortableText
	value={portableText}
	components={portableTextComponents}
	context={{ links, linkedItems }}
/>
