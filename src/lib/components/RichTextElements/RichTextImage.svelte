<script lang="ts">
	import { Image } from '@unpic/svelte';
	import type { PortableTextImage } from '@kontent-ai/rich-text-resolver';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	let {
		portableText
	}: {
		portableText: CustomBlockComponentProps;
	} = $props();

	const { value }: { value: PortableTextImage } = portableText;
</script>

<Image src={value.asset.url} alt={value.asset.alt} layout="fullWidth" />
