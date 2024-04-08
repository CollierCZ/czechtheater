<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	export let portableText: MarkComponentProps;
	const { value, indexInParent } = portableText;
	const isFirst = indexInParent === 0;
</script>

{#if isFirst}
	<p class="mb-4"><slot /></p>
{:else}
	<p class="my-4"><slot /></p>
{/if}
