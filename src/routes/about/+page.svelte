<script lang="ts">
  import type { PageData } from './$types';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>About Czech Theater</title>
  <meta
    name="description"
    content="A multicultural amateur community theater in Brno presenting Czech plays in English."
  />
</svelte:head>

<Title>About Czech Theater</Title>

<RichText richTextElement={data.aboutUsText} />
