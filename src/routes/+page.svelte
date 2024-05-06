<script lang="ts">
  import type { PageData } from './$types';
  import Gallery from '$lib/components/Gallery.svelte';
  import GalleryWithCaptions from '$lib/components/GalleryWithCaptions.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import TicketLink from '$lib/components/TicketLink.svelte';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import type { ImageWithCaption } from '../kontent-types';

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
  {@const gallery = show.elements.gallery.value}
  {@const galleryWithCaptions = show.elements.gallery_with_captions.linkedItems as ImageWithCaption[]}
  {@const ticketLink = show.elements.ticket_link.value}
  <div>
    <h2 class="mb-4 text-3xl font-medium xl:text-4xl">
      {show.elements.name.value}
    </h2>

    <div class="mb-4">
      <ImageConstrainedOneDimension
        image={show.elements.main_image.value[0]}
        height={300}
        priority={true}
      />
    </div>

    {#if ticketLink}
      <TicketLink link={ticketLink} />
    {/if}

    <RichText richTextElement={show.elements.description} />

    {#if galleryWithCaptions.length > 0}
      <GalleryWithCaptions images={galleryWithCaptions} headingLevel={3} />
    {:else if gallery.length > 0}
      <Gallery images={gallery} headingLevel={3} />
    {/if}
  </div>
{/each}
