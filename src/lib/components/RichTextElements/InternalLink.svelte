<script lang="ts">
	import type { ILink } from '@kontent-ai/delivery-sdk';
	import type { MarkComponentProps, PortableTextMarkDefinition } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	let {
		children,
		portableText
	}: {
		children: Snippet;
		portableText: MarkComponentProps;
	} = $props();

	const {
		value,
		global: {
			context: { links }
		}
	}: {
		value: PortableTextMarkDefinition;
		global: {
			context: { links: ILink[] };
		};
	} = portableText;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	const link = links.find((item) => item.linkId === value.reference._ref);
</script>

<a
	class="font-medium underline hover:no-underline focus:no-underline"
	href="/shows/{link?.urlSlug}"
>
	{@render children()}
</a>
