<script lang="ts">
  import RichText from '$lib/components/RichText.svelte';
  import type { Elements } from '@kontent-ai/delivery-sdk';

  let {
    left,
    right
  }: {
    left: Elements.RichTextElement;
    right: Elements.RichTextElement;
  } = $props();
</script>

<div class="grid-cols-2 gap-16 sm:grid">
  <div>
    <RichText richTextElement={left} />
  </div>
  <div>
    <RichText richTextElement={right} />
  </div>
</div>
