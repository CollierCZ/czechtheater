<script lang="ts">
	import type { ILink } from '@kontent-ai/delivery-sdk';
	import type { PortableTextInternalLink } from '@kontent-ai/rich-text-resolver';
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	let {
		children,
		portableText
	}: {
		children: Snippet;
		portableText: MarkComponentProps;
	} = $props();

	const value = portableText.value as PortableTextInternalLink;
	const links = portableText.global.context.links as ILink[];

	const link = links.find((item) => item.linkId === value.reference._ref);
</script>

<a
	class="font-medium underline hover:no-underline focus:no-underline"
	href="/shows/{link?.urlSlug}"
>
	{@render children()}
</a>
