<script lang="ts">
	import type { PageData } from './$types';
	import { richTextResolver } from '$lib';
	import Title from '$lib/components/Title.svelte';

	import { onMount } from 'svelte';
	import type { TheaterFact } from '../../kontent-types';

	export let data: PageData;

	let fact: TheaterFact;

	onMount(() => {
		fact = data.facts[Math.floor(Math.random() * data.facts.length)];
	});
</script>

<svelte:head>
	<title>Czech Theater Fact</title>
	<meta name="description" content="A fact about theater in the Czech Republic." />
</svelte:head>

<Title>Czech Theater Fact</Title>

{#if fact}
	<div class="grid-cols-3 gap-4 md:grid">
		{#if fact.elements.image.value[0]}
			<img
				class="mb-4"
				src={`${fact.elements.image.value[0].url}?h=300`}
				alt={fact.elements.image.value[0].description}
			/>
		{/if}
		<div class="col-span-2">
			{@html richTextResolver(fact.elements.description)}
		</div>
	</div>
{/if}
