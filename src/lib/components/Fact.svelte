<script lang="ts">
	import RichText from './RichText.svelte';
	import type { TheaterFact } from '../../kontent-types';
	import ImageConstrainedHeight from './ImageConstrainedHeight.svelte';

	let {
		fact
	}: {
		fact: TheaterFact;
	} = $props();

	const factImage = fact.elements.image.value[0];
</script>

<div class="mb-12 grid-cols-3 gap-4 md:grid">
	{#if factImage}
		<ImageConstrainedHeight image={factImage} />
	{/if}
	<div class="col-span-2 mt-4 md:mt-0">
		<RichText richTextElement={fact.elements.description} />
	</div>
</div>
