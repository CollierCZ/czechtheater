<script lang="ts">
  import CarouselWithCaptions from './CarouselWithCaptions.svelte';
  import type { Elements } from '@kontent-ai/delivery-sdk';
  import type { ImageWithCaption } from '../../kontent-types';

  export let images: ImageWithCaption[];
  export let headingLevel = 2;
</script>

<svelte:element
  this={`h${headingLevel}`}
  class="mt-8 pb-4 font-medium {headingLevel === 2
    ? 'text-3xl'
    : 'text-2xl'} {headingLevel === 2 ? 'xl:text-4xl' : 'xl:text-3xl'}"
>
  A Look at the Show
</svelte:element>

<CarouselWithCaptions carouselItems={images} />
