<script lang="ts">
	import { getHeightAndWidth } from '$lib/calculateHeightWidthConstraints';
	import type { ElementModels } from '@kontent-ai/delivery-sdk';
	import { Image } from '@unpic/svelte';

	interface BasicProps {
		image: ElementModels.AssetModel;
		priority?: boolean;
	}

	interface ConstrainedHeight extends BasicProps {
		height: number;
		width?: never;
	}

	interface ConstrainedWidth extends BasicProps {
		height?: never;
		width: number;
	}

	let { image, height, width, priority }: ConstrainedHeight | ConstrainedWidth = $props();

	const { height: finalHeight = 0, width: finalWidth = 0 } = getHeightAndWidth({
		image,
		height,
		width
	});
</script>

<Image
	src={image.url}
	alt={image.description}
	height={finalHeight}
	width={finalWidth}
	layout="constrained"
	priority={Boolean(priority)}
/>
