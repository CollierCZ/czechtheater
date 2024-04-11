<script lang="ts">
	import { PortableText, type PortableTextComponents } from '@portabletext/svelte';
	import { nodeParse, transformToPortableText } from '@kontent-ai/rich-text-resolver';
	import type { Elements } from '@kontent-ai/delivery-sdk';

	import ExternalLink from './RichTextElements/ExternalLink.svelte';
	import InternalLink from './RichTextElements/InternalLink.svelte';
	import Paragraph from './RichTextElements/Paragraph.svelte';
	import RichTextImage from './RichTextElements/RichTextImage.svelte';

	export let richTextElement: Elements.RichTextElement;

	let { links, linkedItems, value: richText } = richTextElement;
	const parsedTree = nodeParse(richText);
	const portableText = transformToPortableText(parsedTree);

	const portableTextComponents: PortableTextComponents = {
		types: {
			image: RichTextImage
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
