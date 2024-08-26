<script lang="ts">
  import Fact from '$lib/components/Fact.svelte';
  import Title from '$lib/components/Title.svelte';
  import type { PageData } from './$types';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface FactProps {
    data: PageData;
  }
  let { data } = $props() as FactProps;

  const facts = data.facts;
</script>

<svelte:head>
  <title>Czech Theater Facts</title>
  <meta
    name="description"
    content="A list of facts about theater in the Czech Republic."
  />
</svelte:head>

<Title>All Czech Theater Facts</Title>

{#each facts as fact}
  <Fact {fact} />
{/each}
