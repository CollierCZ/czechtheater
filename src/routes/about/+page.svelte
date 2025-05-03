<script lang="ts">
  import type { PageData } from './$types';
  import RichText from '$lib/components/RichText.svelte';
  import Title from '$lib/components/Title.svelte';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;
</script>

<Seo
  description="A multicultural amateur community theater in Brno presenting Czech plays in English."
  slug="/about"
  title="About"
/>

<Title>About Czech Theater</Title>

<RichText richTextElement={data.aboutUsText} />
