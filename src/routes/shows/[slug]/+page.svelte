<script lang="ts">
	import type { PageData } from './$types';

	import Gallery from '$lib/components/Gallery.svelte';
	import RichText from '$lib/components/RichText.svelte';
	import Title from '$lib/components/Title.svelte';
	import TicketLink from '$lib/components/TicketLink.svelte';
	import ImageConstrainedHeight from '$lib/components/ImageConstrainedHeight.svelte';

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

<div class="mb-4">
	<ImageConstrainedHeight image={showData.main_image.value[0]} height={450} priority={true} />
</div>

{#if ticketLink}
	<TicketLink link={ticketLink} />
{/if}

<p class="mb-4">
	Premiere: {new Date(showData.premiere.value || '').toDateString()}
</p>

<RichText richTextElement={showData.description} />

{#if gallery.value.length > 0}
	<Gallery images={gallery} />
{/if}
