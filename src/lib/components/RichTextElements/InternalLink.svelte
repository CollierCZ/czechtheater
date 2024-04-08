<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	export let portableText: MarkComponentProps;
	const {
		value,
		global: {
			context: { links }
		}
	} = portableText;
	const link = links.find((item) => item.linkId === value.reference._ref);
</script>

<a class="font-medium underline hover:no-underline focus:no-underline" href="/shows/{link?.urlSlug}"
	><slot /></a
>
