<script lang="ts">
  import type { PageData } from './$types';
  import { resolve } from '$app/paths';
  import RichText from '$lib/components/RichText.svelte';
  import { mdiFacebook, mdiEmail, mdiInstagram } from '@mdi/js';

  import Title from '$lib/components/Title.svelte';
  import SvgIcon from '$lib/components/SvgIcon.svelte';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;

  const getIconAndAltText = (link: string): [string, string] => {
    if (
      link.startsWith('https://www.facebook.com') ||
      link.startsWith('https://facebook.com')
    ) {
      return [mdiFacebook, 'Facebook'];
    } else if (
      link.startsWith('https://www.instagram.com') ||
      link.startsWith('https://instagram.com')
    ) {
      return [mdiInstagram, 'Instagram'];
    } else if (link.startsWith('mailto')) {
      return [mdiEmail, 'Email'];
    }
    return ['', ''];
  };
</script>

<Seo
  description="How to get in touch with Czech Theater."
  slug="/contact"
  title="Contact"
/>

<Title>Contact Information</Title>

<div class="mb-6 flex gap-6">
  {#each data.socialMedia as socialMediaLink (socialMediaLink)}
    {@const [icon, alt] = getIconAndAltText(socialMediaLink)}
    {#if icon}
      <a href={resolve(socialMediaLink)}><SvgIcon path={icon} {alt} /></a>
    {/if}
  {/each}
</div>

<RichText richTextElement={data.contactInfo} />
