<script lang="ts">
	import type { PageData } from './$types';
	import Title from '$lib/components/Title.svelte';

	import { onMount } from 'svelte';
	import type { TheaterFact } from '../../kontent-types';
	import Fact from '$lib/components/Fact.svelte';

	export let data: PageData;

	let fact: TheaterFact;

	onMount(() => {
		fact = data.facts[Math.floor(Math.random() * data.facts.length)];
	});
</script>

<svelte:head>
	<title>Czech Theater Fact</title>
	<meta name="description" content="A fact about theater in the Czech Republic." />
</svelte:head>

<Title>Czech Theater Fact</Title>

{#if fact}
	<Fact {fact} />
{/if}
