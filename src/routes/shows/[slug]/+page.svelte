<script lang="ts">
  import type { PageData } from './$types';

  import Gallery from '$lib/components/Gallery.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';

  export let data: PageData;

  const showData = data.showData.elements;
  const gallery = showData.gallery.value;
</script>

<svelte:head>
  <title>{showData.name.value} | Czech Theater</title>
  <meta name="description" content={showData.short_description.value} />
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

<RichText richTextElement={showData.description} />

{#if gallery.length > 0}
  <Gallery images={gallery} />
{/if}
