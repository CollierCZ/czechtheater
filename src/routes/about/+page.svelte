<script lang="ts">
  import {
    mdiArrowBottomLeft,
    mdiArrowDown,
    mdiArrowBottomRight,
    mdiHandHeart,
    mdiHandshake,
    mdiPalette
  } from '@mdi/js';
  import ActionButton from '$lib/components/ActionButton.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import SvgIcon from '$lib/components/SvgIcon.svelte';
  import Title from '$lib/components/Title.svelte';

  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let showModal = $state(0);

  const firstValue = data.values.linkedItems[0];
</script>

<Seo
  description="A multicultural amateur community theater in Brno presenting Czech plays in English."
  slug="/about"
  title="About"
/>

<Title>About Czech Theater</Title>

<RichText richTextElement={data.aboutUsText} />

<Heading level={2}>Our Values</Heading>

<div class="flex justify-center">
  <ActionButton
    big
    action={() => {
      showModal = 1;
    }}
  >
    {firstValue.elements.name.value}
  </ActionButton>
  <Modal bind:showModal={() => showModal === 1, () => showModal === 1}>
    <RichText richTextElement={firstValue.elements.description} />
  </Modal>
</div>

<div class="my-4 flex justify-center gap-24 sm:my-0 sm:gap-32">
  <div class="hidden sm:block">
    <SvgIcon path={mdiArrowBottomLeft} />
  </div>
  <SvgIcon path={mdiArrowDown} />
  <div class="hidden sm:block">
    <SvgIcon path={mdiArrowBottomRight} />
  </div>
</div>

<div
  class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-12"
>
  {#each data.values.linkedItems as value, index (value.system.codename)}
    {@const valueIcon = value.elements.icon.value}
    {#if index !== 0}
      <ActionButton
        action={() => {
          showModal = index + 1;
        }}
        iconPath={valueIcon === 'mdiPalette'
          ? mdiPalette
          : valueIcon === 'mdiHandshake'
            ? mdiHandshake
            : valueIcon === 'mdiHandHeart'
              ? mdiHandHeart
              : ''}
      >
        {value.elements.name.value}
      </ActionButton>
      <Modal
        bind:showModal={
          () => showModal === index + 1, () => showModal === index + 1
        }
      >
        <RichText richTextElement={value.elements.description} />
      </Modal>
    {/if}
  {/each}
</div>

<p class="mt-8">
  Open each value for more information on why it's important to us.
</p>
