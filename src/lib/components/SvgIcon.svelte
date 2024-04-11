<script lang="ts">
	export let alt = '';
	export let path: string;
	const size = 24;
</script>

<svg class="scale-150" width={size} height={size} viewBox="0 0 24 24">
	<title>{alt}</title>
	<path d={path} />
</svg>
