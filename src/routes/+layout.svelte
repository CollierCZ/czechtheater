<script lang="ts">
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';
  import type { Snippet } from 'svelte';
  import '../app.pcss';

  let {
    data,
    children
  }: {
    data: LayoutData;
    children: Snippet;
  } = $props();

  let currentSlug = $derived($page.url.pathname);

  const navItems = [
    ['/', 'Upcoming Shows'],
    ['/auditions', 'Auditions'],
    ['/shows', 'Past Shows'],
    ['/fact', 'Fact'],
    ['/about', 'About'],
    ['/contact', 'Contact']
  ];
</script>

<header
  class="flex items-center justify-center gap-2 pb-3 text-4xl font-black xl:text-6xl"
>
  <img class="inline size-24" src={`${data.logo.url}?w=180,h=180`} alt="" />
  <p>Czech Theater</p>
</header>

<nov class="mb-6 flex flex-wrap justify-center gap-2 px-2 xl:text-xl">
  {#each navItems as navItem}
    <a
      href={navItem[0]}
      class="focus:bg-slate-10 hover:bg-slate-10 rounded-lg p-2 font-medium underline-offset-8 hover:bg-slate-100 focus:bg-slate-100"
      class:underline={navItem[0] === '/'
        ? currentSlug === navItem[0]
        : currentSlug.startsWith(navItem[0])}>{navItem[1]}</a
    >
  {/each}
</nov>

<main
  class="m-auto mb-6 min-h-[calc(100vh-300px)] max-w-prose px-4 text-lg sm:min-h-[calc(100vh-228px)] md:px-0 xl:text-2xl"
>
  {@render children()}
</main>

<footer class="m-4 mb-2 text-center text-sm">
  Content © 2018–{new Date().getFullYear()} Czech Theater, z.s. IČO: 07245904. Website
  code available on
  <a
    class="underline hover:no-underline focus:no-underline"
    href="https://github.com/CollierCZ/czechtheater">GitHub</a
  >.
</footer>
