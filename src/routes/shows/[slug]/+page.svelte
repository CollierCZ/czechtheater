<script lang="ts">
  import type { PageData } from './$types';

  import Gallery from '$lib/components/Gallery.svelte';
  import GalleryWithCaptions from '$lib/components/GalleryWithCaptions.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import type { ImageWithCaption } from '../../../kontent-types';
    import TicketLink from '$lib/components/TicketLink.svelte';

  export let data: PageData;

  const showData = data.showData.elements;
  const gallery = showData.gallery.value;
  const galleryWithCaptions = showData.gallery_with_captions
    .linkedItems as ImageWithCaption[];
  const ticketLink = showData.ticket_link.value
</script>

<svelte:head>
  <title>{showData.name.value} | Czech Theater</title>
  <meta name="description" content={showData.short_description.value} />
  <meta property="og:title" content={showData.name.value} />
  <meta name="og:site_name" content="Czech Theater" />
  <meta property="og:type" content="article" />
  <meta name="og:description" content={showData.short_description.value} />
  <meta property="og:url" content={`https://czechtheater.cz/shows/${showData.url.value}`} />
  <meta property="og:image" content={showData.main_image.value[0].url} />
</svelte:head>

<Title>{showData.name.value}</Title>

<div class="mb-4">
  <ImageConstrainedOneDimension
    image={showData.main_image.value[0]}
    height={450}
    priority={true}
  />
</div>

<p class="mb-4">
  Premiere: {new Date(showData.premiere.value || '').toDateString()}
</p>

{#if ticketLink && new Date(showData.premiere.value || '') >= new Date(Date.now() - 12096e5)}
  <TicketLink link={ticketLink} />
{/if}

<RichText richTextElement={showData.description} />

{#if galleryWithCaptions.length > 0}
  <GalleryWithCaptions images={galleryWithCaptions} headingLevel={3} />
{:else if gallery.length > 0}
  <Gallery images={gallery} />
{/if}
