<script lang="ts">
  import type { ListComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    children,
    portableText
  }: {
    children: Snippet;
    portableText: ListComponentProps;
  } = $props();

  console.log(portableText)
</script>

<ul
  class="list-disc ml-4"
>
  {@render children()}
</ul>
