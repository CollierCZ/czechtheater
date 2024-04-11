<script lang="ts">
	import RichText from './RichText.svelte';
	import type { TheaterFact } from '../../kontent-types';

	let {
		fact
	}: {
		fact: TheaterFact;
	} = $props();
</script>

<div class="mb-12 grid-cols-3 gap-4 md:grid">
	{#if fact.elements.image.value[0]}
		<img
			class="mb-4"
			src={`${fact.elements.image.value[0].url}?h=300`}
			alt={fact.elements.image.value[0].description}
		/>
	{/if}
	<div class="col-span-2">
		<RichText richTextElement={fact.elements.description} />
	</div>
</div>
