<script lang="ts">
  import type { PageData } from './$types';
  import Seo from '$lib/components/Seo.svelte';
  import Title from '$lib/components/Title.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Fact from '$lib/components/Fact.svelte';

  export let data: PageData;

  const newsletterEditionData = data.newsletterEditionData.elements;

  const publishDate = newsletterEditionData.month_and_year.value;

  const slug = newsletterEditionData.slug.value;
</script>

<Seo
  description="Behind the Curtain for {publishDate}. A monthly newsletter on Czech theater events in English in Brno."
  slug={`/newsletter/${slug}`}
  title={`Behind the Curtain ${publishDate}`}
/>

<Title>Behind the Curtain {publishDate}</Title>

<RichText richTextElement={newsletterEditionData.introduction} />

<Heading level={2}>The Show Must Go On</Heading>

<RichText richTextElement={newsletterEditionData.upcoming_shows} />

<Heading level={2}>Waiting in the Wings</Heading>

<RichText richTextElement={newsletterEditionData.notes_from_production} />

<Heading level={2}>Intermission</Heading>

<Fact fact={newsletterEditionData.intermission.linkedItems[0]} />

<Heading level={2}>In the Spotlight</Heading>

<RichText richTextElement={newsletterEditionData.interview} />

<Heading level={2}>A Tough Act to Follow</Heading>

<RichText richTextElement={newsletterEditionData.past_play} />
