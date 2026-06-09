<script lang="ts">
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

  const { indexInParent } = $derived(portableText);
  const isFirst = $derived.by(() => indexInParent === 0);
</script>

{#if isFirst}
  <p class="mb-4">{@render children()}</p>
{:else}
  <p class="my-4">{@render children()}</p>
{/if}
