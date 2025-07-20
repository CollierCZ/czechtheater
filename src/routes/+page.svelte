<script lang="ts">
  import type { PageData } from './$types';
  import Gallery from '$lib/components/Gallery.svelte';
  import GalleryWithCaptions from '$lib/components/GalleryWithCaptions.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import TicketLink from '$lib/components/TicketLink.svelte';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import { getMonthFromDateString } from '$lib';
  import Seo from '$lib/components/Seo.svelte';
  import Heading from '$lib/components/Heading.svelte';

  export let data: PageData;
</script>

<Seo
  description="A multicultural amateur community theater in Brno presenting Czech plays in English."
  slug="/"
/>

<Title>Upcoming Shows</Title>

<div class="flex flex-col space-y-12">
  {#each data.futureShows as show (show.system.codename)}
    {@const gallery = show.elements.gallery.value}
    {@const galleryWithCaptions =
      show.elements.gallery_with_captions.linkedItems}
    {@const ticketLink = show.elements.ticket_link.value}
    {@const trailer = show.elements.trailer.value}
    <div>
      <Heading level={2}>
        {show.elements.name.value}
      </Heading>

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

      {#if trailer.length > 0}
        <Heading level={3}>Trailer</Heading>
        <RichText richTextElement={show.elements.trailer} />
      {/if}

      <p class="my-4">
        Coming: {getMonthFromDateString(show.elements.premiere.value)}
      </p>

      <RichText richTextElement={show.elements.description} />

      {#if galleryWithCaptions.length > 0}
        <GalleryWithCaptions images={galleryWithCaptions} headingLevel={3} />
      {:else if gallery.length > 0}
        <Gallery images={gallery} headingLevel={3} />
      {/if}
    </div>
  {/each}
</div>
