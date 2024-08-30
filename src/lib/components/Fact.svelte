<script lang="ts">
  import RichText from './RichText.svelte';
  import type { TheaterFact } from '../../kontent-types';
  import ImageConstrainedOneDimension from './ImageConstrainedOneDimension.svelte';

  let {
    fact
  }: {
    fact: TheaterFact;
  } = $props();

  const factImage = fact.elements.image.value[0];
</script>

<div class={`mb-12 grid-cols-3 gap-4 ${factImage ? 'md:grid' : ''}`}>
  {#if factImage}
    <ImageConstrainedOneDimension image={factImage} height={300} />
  {/if}
  <div class="col-span-2 mt-4 md:mt-0">
    <RichText richTextElement={fact.elements.description} />
  </div>
</div>
