<script lang="ts">
	import type { PageData } from './$types';
	import { richTextResolver } from '$lib';
	import Gallery from '$lib/components/Gallery.svelte';
	import Title from '$lib/components/Title.svelte';
	import TicketLink from '$lib/components/TicketLink.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Czech Theater</title>
	<meta
		name="description"
		content="A multicultural amateur community theater in Brno presenting Czech plays in English."
	/>
</svelte:head>

<Title>Upcoming Shows</Title>

{#each data.futureShows as show}
	{@const gallery = show.elements.gallery}
	{@const ticketLink = show.elements.ticket_link.value}
	<div>
		<h2 class="mb-4 font-medium">{show.elements.name.value}</h2>
		<img
			class="h-64 pb-2"
			src={`${show.elements.main_image.value[0].url}?h=300`}
			alt={show.elements.main_image.value[0].description}
		/>

		{@html richTextResolver(show.elements.description)}

		{#if ticketLink}
			<TicketLink link={ticketLink} />
		{/if}

		{#if gallery.value.length > 0}
			<Gallery images={gallery} />
		{/if}
	</div>
{/each}
