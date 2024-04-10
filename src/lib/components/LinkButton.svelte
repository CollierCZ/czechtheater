<script lang="ts">
	import SvgIcon from '$lib/components/SvgIcon.svelte';
	import type { Snippet } from 'svelte';
	
	let { link, iconAlt, iconPath, children }: {
		link: string,
		iconAlt?: string,
		iconPath?: string,
		children: Snippet 
	} = $props()
</script>

<div class="my-2">
	<a
		class="hover:text-medium focus:text-medium inline-flex items-center gap-2 rounded-lg bg-blue-100 p-6 hover:bg-blue-200 focus:bg-blue-200"
		href={link}
	>
		<SvgIcon path={iconPath} alt={iconAlt} />
		{@render children()}
	</a>
</div>
