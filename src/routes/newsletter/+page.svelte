<script lang="ts">
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
