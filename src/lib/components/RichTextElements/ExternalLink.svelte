<script lang="ts">
  import type { PortableTextExternalLink } from '@kontent-ai/rich-text-resolver';
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    children,
    portableText
  }: {
    children: Snippet;
    portableText: MarkComponentProps;
  } = $props();

  const linkData = portableText.value as PortableTextExternalLink;
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve Likely an external link -->
<a
  class="font-medium underline hover:no-underline focus:no-underline"
  href={linkData.href!}
  rel={linkData.rel}
>
  {@render children()}
</a>
