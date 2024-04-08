<script lang="ts">
	export let link: string;
</script>

<div class="my-2">
	<a
		class="hover:text-medium focus:text-medium inline-block inline-flex items-center gap-2 rounded-lg bg-blue-100 p-6 hover:bg-blue-200 focus:bg-blue-200"
		href={link}
	>
		<slot />
	</a>
</div>
