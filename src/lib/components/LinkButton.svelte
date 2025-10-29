<script lang="ts">
  import SvgIcon from '$lib/components/SvgIcon.svelte';
  import type { Snippet } from 'svelte';

  let {
    link,
    iconAlt,
    iconPath,
    children
  }: {
    link: string;
    iconAlt?: string;
    iconPath?: string;
    children: Snippet;
  } = $props();
</script>

<div class="my-2">
  <!-- eslint-disable svelte/no-navigation-without-resolve Likely an external link -->
  <a
    class="hover:text-medium focus:text-medium inline-flex items-center gap-2 rounded-lg bg-blue-100 p-6 hover:bg-blue-200 focus:bg-blue-200"
    href={link}
  >
    {#if iconPath}
      <SvgIcon path={iconPath} alt={iconAlt} />
    {/if}
    {@render children()}
  </a>
</div>
