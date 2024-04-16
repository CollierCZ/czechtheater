<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<h1 class="pb-6 text-4xl font-medium xl:text-5xl">{@render children()}</h1>
