<script lang="ts">
  import { Image } from '@unpic/svelte';
  import type { PortableTextImage } from '@kontent-ai/rich-text-resolver';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    portableText
  }: {
    portableText: CustomBlockComponentProps;
  } = $props();

  const imageData = $derived(portableText.value.asset) as PortableTextImage;
</script>

<Image src={imageData.url} alt={imageData.alt} layout="fullWidth" />
