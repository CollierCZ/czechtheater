<script lang="ts">
  import type { MarkComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface ParagraphtProps {
    children: Snippet;
    portableText: MarkComponentProps;
  }
  // Property custom marks receive from @portabletext/svelte when redered
  let { children, portableText } = $props() as ParagraphtProps;

  const { indexInParent } = portableText;
  const isFirst = indexInParent === 0;
</script>

{#if isFirst}
  <p class="mb-4">{@render children()}</p>
{:else}
  <p class="my-4">{@render children()}</p>
{/if}
