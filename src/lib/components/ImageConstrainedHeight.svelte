<script lang="ts">
	import type { ElementModels } from '@kontent-ai/delivery-sdk';
	import { Image } from '@unpic/svelte';

	let {
		image,
		height,
		priority
	}: {
		image: ElementModels.AssetModel;
		height?: number;
		priority?: boolean;
	} = $props();

	const finalHeight = height || 300;
	const width = (Number(image.width) / Number(image.height)) * finalHeight;
</script>

<Image
	src={image.url}
	alt={image.description}
	height={finalHeight}
	{width}
	layout="constrained"
	priority={Boolean(priority)}
/>
