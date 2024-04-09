<script lang="ts">
	import type { PageData } from './$types';

	import Title from '$lib/components/Title.svelte';
	import { getDateFromDateString } from '$lib';

	export let data: PageData;
</script>

<svelte:head>
	<title>Past Shows by Czech Theater</title>
	<meta name="description" content="A list of all of the shows that Czech Theater has put on." />
</svelte:head>

<Title>Past Shows</Title>

{#each data.pastShows as show}
	<div class="mb-12 gap-4 grid-cols-2 md:grid">
		<a href={`/shows/${show.elements.url.value}`}>
			<img
				class="h-62 transition delay-150 ease-in-out hover:scale-105 focus:scale-105"
				src={`${show.elements.main_image.value[0].url}?h=300`}
				alt={show.elements.main_image.value[0].description}
			/>
		</a>
		<div class="mt-2 md:mt-0">
			<a
				class="underline hover:no-underline focus:no-underline"
				href={`/shows/${show.elements.url.value}`}
				><h2 class="mb-4 font-medium">{show.elements.name.value}</h2></a
			>
			<p class="mb-4">{show.elements.short_description.value}</p>
			<p>Premiere: {getDateFromDateString(show.elements.premiere.value)}</p>
		</div>
	</div>
{/each}
