<script lang="ts">
  import type { Elements } from '@kontent-ai/delivery-sdk';
  import LinkButton from '../LinkButton.svelte';

  let { link, video }: { link: string; video: Elements.AssetsElement } =
    $props();
</script>

{#if video}
  <video controls>
    <source src={video.value[0].url} type={video.value[0].type} />
    <track kind="captions" />
    Download the <a href={video.value[0].url}>trailer</a>.
  </video>
{:else}
  <LinkButton {link}>Watch the trailer</LinkButton>
{/if}
