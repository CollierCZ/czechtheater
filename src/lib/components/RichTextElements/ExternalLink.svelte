<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	// Property custom marks receive from @portabletext/svelte when redered
	export let portableText: MarkComponentProps;

	$: ({ value } = portableText);
</script>

<a
	class="font-medium underline hover:no-underline focus:no-underline"
	href={value.href!}
	data-new-window={value['data-new-window']}
>
	<slot />
</a>
