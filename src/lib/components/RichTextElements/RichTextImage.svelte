<script lang="ts">
  import { Image } from '@unpic/svelte';
  import type { PortableTextImage } from '@kontent-ai/rich-text-resolver';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface RichTextImagetProps {
    portableText: CustomBlockComponentProps;
  }
  // Property custom marks receive from @portabletext/svelte when redered
  let { portableText } = $props() as RichTextImagetProps;

  const imageData = portableText.value.asset as PortableTextImage;
</script>

<Image src={imageData.url} alt={imageData.alt} layout="fullWidth" />
