<script lang="ts">
	import type { ElementModels } from '@kontent-ai/delivery-sdk';
	import Carousel from './Carousel.svelte';

	export let images: ElementModels.AssetModel[];
</script>

<h2 class="mt-8 pb-4 text-2xl font-medium">A Look at the Show</h2>

<Carousel carouselItems={images} />
