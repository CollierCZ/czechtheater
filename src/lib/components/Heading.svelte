<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    centered,
    level
  }: {
    children: Snippet;
    centered?: boolean,
    level: 2 | 3 | 4;
  } = $props();
  const levelSize = $derived(level === 2 ? 3 : level === 3 ? 2 : 1);
</script>

<svelte:element
  this={`h${level}`}
  class="mt-8 pb-4 font-medium text-{levelSize}xl xl:text-{levelSize + 1}xl {centered ? 'text-center' : ''}"
>
  {@render children()}
</svelte:element>
