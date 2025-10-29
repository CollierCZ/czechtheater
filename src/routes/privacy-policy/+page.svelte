<script lang="ts">
  import RichText from '$lib/components/RichText.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Title from '$lib/components/Title.svelte';

  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const title = data.title;
</script>

<Seo
  description="Czech Theater's Privacy Policy: See what information we collect and how we protect it."
  slug={`/${data.slug}`}
  {title}
/>

<Title>{title}</Title>

<RichText richTextElement={data.privacyPolicyText} />
