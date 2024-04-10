<script lang="ts">
	import type { Elements } from '@kontent-ai/delivery-sdk';
	import ImageGallery from '@react2svelte/image-gallery';

	export let images: Elements.AssetsElement;

	const galleryImages = images.value.map((image) => ({
		original: image.url,
		thumbnail: `${image.url}?w=284&h=284&auto=format&fit=crop`,
		originalAlt: image.description || '',
		thumbnailAlt: image.description || '',
		description: image.description || ''
	}));
</script>

<div class="mt-6">
	<ImageGallery
		items={galleryImages}
		lazyLoad={true}
		showFullscreenButton={false}
		showPlayButton={false}
	/>
</div>
