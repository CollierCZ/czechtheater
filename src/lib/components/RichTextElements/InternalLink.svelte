<script lang="ts">
  import type { ILink } from '@kontent-ai/delivery-sdk';
  import type { PortableTextInternalLink } from '@kontent-ai/rich-text-resolver';
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface InternalLinkProps {
    children: Snippet;
    portableText: MarkComponentProps;
  }
  // Property custom marks receive from @portabletext/svelte when redered
  let { children, portableText } = $props() as InternalLinkProps;

  const value = portableText.value as PortableTextInternalLink;
  const links = portableText.global.context.links as ILink[];

  const link = links.find((item) => item.linkId === value.reference._ref);
</script>

<a
  class="font-medium underline hover:no-underline focus:no-underline"
  href="/shows/{link?.urlSlug}"
>
  {@render children()}
</a>
