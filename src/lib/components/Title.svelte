<script lang="ts">
  import type { Snippet } from 'svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface TitleProps {
    children: Snippet;
  }
  let { children } = $props() as TitleProps;
</script>

<h1 class="pb-6 text-4xl font-medium xl:text-5xl">{@render children()}</h1>
