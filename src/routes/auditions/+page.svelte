<script lang="ts">
  import type { PageData } from './$types';
  import { getDateFromDateString } from '$lib';
  import { mdiFacebook } from '@mdi/js';

  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import LinkButton from '$lib/components/LinkButton.svelte';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;

  const auditionDate = data.auditionsInfo.audition_date.value;
  const auditionEventLink = data.auditionsInfo.link_to_audition_event.value;
</script>

<Seo
  description="How to audition for a role in a Czech Theater production."
  slug="/audition"
  title="Audition"
/>

<Title>Auditions</Title>

{#if auditionDate}
  <p class="mb-4">Audition Date: {getDateFromDateString(auditionDate)}</p>
{/if}

<RichText richTextElement={data.auditionsInfo.upcoming_auditions_description} />

{#if auditionEventLink}
  <LinkButton link={auditionEventLink} iconPath={mdiFacebook} iconAlt="Facebook"
    >Audition Event</LinkButton
  >
{/if}
