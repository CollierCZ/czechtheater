<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<h1 class="pb-6 text-4xl font-medium">{@render children()}</h1>
