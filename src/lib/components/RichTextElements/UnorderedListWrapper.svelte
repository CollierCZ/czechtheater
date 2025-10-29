<script lang="ts">
  import type { ListComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    children
  }: {
    children: Snippet;
  } = $props();
</script>

<ul class="ml-4 list-disc">
  {@render children()}
</ul>
