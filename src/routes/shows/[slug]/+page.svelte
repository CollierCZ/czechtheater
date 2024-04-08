<script lang="ts">
	import type { PageData } from './$types';
	import { richTextResolver } from '$lib';

	import Gallery from '$lib/components/Gallery.svelte';
	import Title from '$lib/components/Title.svelte';
	import TicketLink from '$lib/components/TicketLink.svelte';

	export let data: PageData;

	const showData = data.showData.elements;
	const gallery = showData.gallery;
	const ticketLink = showData.ticket_link.value;
</script>

<svelte:head>
	<title>{showData.name.value} | Czech Theater</title>
	<meta name="description" content={showData.short_description.value} />
</svelte:head>

<Title>{showData.name.value}</Title>

<img
	class="mb-4 h-96"
	src={`${showData.main_image.value[0].url}?h=450`}
	alt={showData.main_image.value[0].description}
/>

{#if ticketLink}
	<TicketLink link={ticketLink} />
{/if}

<p class="mb-4">
	Premiere: {new Date(showData.premiere.value || '').toDateString()}
</p>

{@html richTextResolver(showData.description)}

{#if gallery.value.length > 0}
	<Gallery images={gallery} />
{/if}
