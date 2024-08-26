<script lang="ts">
  import SvgIcon from '$lib/components/SvgIcon.svelte';
  import type { Snippet } from 'svelte';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface LinkProps {
    link: string;
    iconAlt?: string;
    iconPath?: string;
    children: Snippet;
  }
  let { link, iconAlt, iconPath, children } = $props() as LinkProps;
</script>

<div class="my-2">
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
