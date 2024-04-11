<script lang="ts">
	import type { PageData } from './$types';

	import Title from '$lib/components/Title.svelte';
	import { getDateFromDateString } from '$lib';
	import ImageConstrainedHeight from '$lib/components/ImageConstrainedHeight.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Past Shows by Czech Theater</title>
	<meta name="description" content="A list of all of the shows that Czech Theater has put on." />
</svelte:head>

<Title>Past Shows</Title>

{#each data.pastShows as show}
	{@const showData = show.elements}
	{@const showMainImage = showData.main_image.value[0]}
	<div class="mb-12 grid-cols-2 gap-4 md:grid">
		<div
			class="origin-left transition delay-150 ease-in-out hover:scale-105 focus:scale-105 motion-reduce:hover:transform-none md:origin-center"
		>
			<a href={`/shows/${showData.url.value}`}>
				<ImageConstrainedHeight image={showMainImage} />
			</a>
		</div>
		<div class="mt-2 md:mt-0">
			<a
				class="underline hover:no-underline focus:no-underline"
				href={`/shows/${showData.url.value}`}
				><h2 class="mb-4 font-medium">{showData.name.value}</h2></a
			>
			<p class="mb-4">{showData.short_description.value}</p>
			<p>Premiere: {getDateFromDateString(showData.premiere.value)}</p>
		</div>
	</div>
{/each}
