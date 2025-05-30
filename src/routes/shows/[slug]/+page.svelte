<script lang="ts">
  import type { PageData } from './$types';

  import Gallery from '$lib/components/Gallery.svelte';
  import GalleryWithCaptions from '$lib/components/GalleryWithCaptions.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Title from '$lib/components/Title.svelte';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import TicketLink from '$lib/components/TicketLink.svelte';
  import PerformanceLink from '$lib/components/PerformanceLink.svelte';
  import { getDateFromDateString, isShowInFuture } from '$lib';

  export let data: PageData;

  const showData = data.showData.elements;
  const gallery = showData.gallery.value;
  const galleryWithCaptions = showData.gallery_with_captions.linkedItems;
  const ticketLink = showData.ticket_link.value;
  const premiereDate = getDateFromDateString(showData.premiere.value);
  const fullPerformanceLink = showData.full_performance_link.value;
</script>

<Seo
  description={showData.short_description.value}
  imageUrl={showData.main_image.value[0].url}
  isShow={true}
  slug={`/shows/${showData.url.value}`}
  startDate={premiereDate}
  title={showData.name.value}
/>

<Title>{showData.name.value}</Title>

<div class="mb-4">
  <ImageConstrainedOneDimension
    image={showData.main_image.value[0]}
    height={450}
    priority={true}
  />
</div>

<p class="mb-4">
  Premiere: {premiereDate}
</p>

{#if ticketLink && isShowInFuture(premiereDate)}
  <TicketLink link={ticketLink} />
{/if}

{#if fullPerformanceLink}
  <PerformanceLink link={fullPerformanceLink} />
{/if}

<RichText richTextElement={showData.description} />

{#if galleryWithCaptions.length > 0}
  <GalleryWithCaptions images={galleryWithCaptions} headingLevel={3} />
{:else if gallery.length > 0}
  <Gallery images={gallery} />
{/if}
