<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import RichText from '$lib/components/RichText.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Title from '$lib/components/Title.svelte';

  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<Seo
  description="Behind the Curtain: A monthly newsletter on Czech theater events in English in Brno."
  slug="/newsletter"
  title="Behind the Curtain"
/>

<Title>Behind the Curtain</Title>

<RichText richTextElement={data.newsletterSignUpText} />

<Heading level={2}>See past editions</Heading>

{#each data.newsletterEditions as edition}
  {@const publishDate = new Date(
    edition.elements.publish_date.value
  ).toLocaleString('default', { month: 'long', year: 'numeric' })}

  <p class="font-medium underline hover:no-underline focus:no-underline">
    <a href={publishDate.toLowerCase().replace(' ', '-')}>{publishDate}</a>
  </p>
{/each}
