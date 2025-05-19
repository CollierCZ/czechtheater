<script lang="ts">
  import SvgIcon from '$lib/components/SvgIcon.svelte';
  import type { Snippet } from 'svelte';

  let {
    action,
    big,
    iconAlt,
    iconPath,
    children
  }: {
    action: () => void;
    big?: boolean;
    iconAlt?: string;
    iconPath?: string;
    children: Snippet;
  } = $props();
</script>

<div class={`my-2 ${big ? "text-4xl" : ""}`}>
  <button
    class="hover:text-medium focus:text-medium inline-flex items-center gap-2 rounded-lg bg-blue-100 p-6 hover:bg-blue-200 focus:bg-blue-200"
    onclick={action}
  >
    {#if iconPath}
      <SvgIcon path={iconPath} alt={iconAlt} />
    {/if}
    {@render children()}
  </button>
</div>
