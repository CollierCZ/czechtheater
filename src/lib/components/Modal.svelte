<script>
    import { mdiClose } from "@mdi/js";
    import SvgIcon from "./SvgIcon.svelte";

	let { showModal = $bindable(), children } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = 0)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
  class="max-w-64 md:max-w-120 place-self-center"
>
	<div class="p-8 grid">
		<button class="place-self-end" onclick={() => dialog.close()}><SvgIcon alt="Close" path={mdiClose} /></button>
		{@render children?.()}
	</div>
</dialog>