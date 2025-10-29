<script lang="ts">
  import type { BlockComponentProps } from '@portabletext/svelte';
  import type { Snippet } from 'svelte';
  import Heading from '../Heading.svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    children,
    portableText
  }: {
    children: Snippet;
    portableText: BlockComponentProps;
  } = $props();

  const style = portableText.value.style;

  const level = !style ? 2 : (parseInt(style?.replace(/^h/, '')) as 2 | 3 | 4);
</script>

<Heading {level}>
  {@render children()}
</Heading>
