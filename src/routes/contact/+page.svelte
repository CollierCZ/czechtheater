<script lang="ts">
	import type { PageData } from './$types';
	import RichText from '$lib/components/RichText.svelte';
	import { mdiFacebook, mdiEmail, mdiInstagram } from '@mdi/js';

	import Title from '$lib/components/Title.svelte';
	import SvgIcon from '$lib/components/SvgIcon.svelte';

	export let data: PageData;

	const getIconAndAltText = (link: string): [string, string] => {
		if (link.startsWith('https://www.facebook.com')) {
			return [mdiFacebook, 'Facebook'];
		} else if (link.startsWith('https://www.instagram.com')) {
			return [mdiInstagram, 'Instagram'];
		} else if (link.startsWith('mailto')) {
			return [mdiEmail, 'Email'];
		}
		return ['', ''];
	};
</script>

<svelte:head>
	<title>Contact Czech Theater</title>
	<meta name="description" content="How to get in touch with Czech Theater." />
</svelte:head>

<Title>Contact Information</Title>

<div class="mb-6 flex gap-6">
	{#each data.socialMedia as socialMediaLink}
		{@const [icon, alt] = getIconAndAltText(socialMediaLink)}
		{#if icon}
			<a href={socialMediaLink}><SvgIcon path={icon} {alt} /></a>
		{/if}
	{/each}
</div>

<RichText richTextElement={data.contactInfo} />
