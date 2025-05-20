<script lang="ts">
  import { mdiClose } from '@mdi/js';
  import SvgIcon from './SvgIcon.svelte';
  import type { Snippet } from 'svelte';

  let {
    showModal = $bindable(),
    children
  }: {
    showModal: boolean;
    children: Snippet;
  } = $props();

  let dialog = $state<HTMLDialogElement>();

  $effect(() => {
    if (showModal) dialog?.showModal();
  });
</script>

<dialog
  bind:this={dialog}
  onclose={() => (showModal = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
  class="m-auto max-w-64 rounded-lg shadow-2xl md:max-w-120"
>
  <div class="grid p-8">
    <button
      class="place-self-end p-2 hover:bg-gray-200 focus:bg-gray-200"
      onclick={() => dialog?.close()}
    >
      <SvgIcon alt="Close" path={mdiClose} />
    </button>
    <div>
      {@render children?.()}
    </div>
  </div>
</dialog>
