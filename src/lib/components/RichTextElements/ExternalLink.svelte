<script lang="ts">
  import type { PortableTextExternalLink } from '@kontent-ai/rich-text-resolver';
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface ExternalLinkProps {
    children: Snippet;
    portableText: MarkComponentProps;
  }
  // Property custom marks receive from @portabletext/svelte when redered
  let { children, portableText } = $props() as ExternalLinkProps;

  const linkData = portableText.value as PortableTextExternalLink;
</script>

<a
  class="font-medium underline hover:no-underline focus:no-underline"
  href={linkData.href!}
  rel={linkData.rel}
>
  {@render children()}
</a>
