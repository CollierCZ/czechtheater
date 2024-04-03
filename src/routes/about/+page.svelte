<script lang="ts">
	import type { PageData } from './$types';
	import { richTextResolver } from '$lib';
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

{@html richTextResolver(data.aboutUsText)}
