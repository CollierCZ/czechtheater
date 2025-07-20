<script lang="ts">
  import type { PageData } from './$types';
  import Title from '$lib/components/Title.svelte';

  import { onMount } from 'svelte';
  import type { TheaterFactType } from '../../kontent-types';
  import Fact from '$lib/components/Fact.svelte';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;

  let fact: TheaterFactType;

  onMount(() => {
    fact = data.facts[Math.floor(Math.random() * data.facts.length)];
  });
</script>

<Seo
  description="A fact about theater in the Czech Republic."
  slug="/fact"
  title="Czech Theater Fact"
/>

<Title>Czech Theater Fact</Title>

{#if fact}
  <Fact {fact} />
{/if}
