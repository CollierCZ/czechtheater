<script lang="ts">
  import type { Elements } from '@kontent-ai/delivery-sdk';
  import LinkButton from '../LinkButton.svelte';

  let {
    link,
    video,
    videoSmall
  }: {
    link: string;
    video: Elements.AssetsElement;
    videoSmall: Elements.AssetsElement;
  } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve Definitely external links (from Kontent.ai) -->
{#if video}
  <video controls>
    {#if videoSmall}
      <source
        src={videoSmall.value[0].url}
        type={videoSmall.value[0].type}
        media="(max-width: 768px"
      />
    {/if}
    <source src={video.value[0].url} type={video.value[0].type} />
    <track kind="captions" />
    Download the <a href={video.value[0].url}>trailer</a>.
  </video>
{:else}
  <LinkButton {link}>Watch the trailer</LinkButton>
{/if}
