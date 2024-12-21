<script lang="ts">
  export let title = '';
  export let description: string;
  export let isShow = false;
  export let imageUrl = '';
  export let slug = '';
  export let startDate = '';

  let fullUrl = `https://czechtheater.cz${slug}`;

  /* Structured data for SEO */
  const czechTheaterObject = {
    '@type': 'PerformingGroup',
    name: 'Czech Theater',
    email: 'czechtheater@gmail.com',
    foundingDate: '2018-06-18',
    legalName: 'Czech Theater, z.s.',
    logo: 'https://assets-us-01.kc-usercontent.com:443/fb599585-baec-0077-1624-981d3321fff0/4e43fc7c-ce8d-49fd-aba9-bdf908330220/logo.jpg',
    taxID: '07245904',
    url: 'https://czechtheater.cz'
  };

  let getJsonLd = () => {
    if (isShow) {
      return {
        '@context': 'http://schema.org',
        '@type': 'Event',
        about: description,
        actor: czechTheaterObject,
        description,
        doorTime: '19:00',
        image: imageUrl,
        inLanguage: 'English',
        startDate,
        url: fullUrl,
        workPerformed: title
      };
    }
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      about: description,
      author: czechTheaterObject,
      copyrightHolder: czechTheaterObject,
      name: title,
      url: fullUrl
    };
  };

  let jsonLdString = JSON.stringify(getJsonLd());

  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
  {#if title}
    <title>{title} | Czech Theater</title>
  {:else}
    <title>Czech Theater</title>
  {/if}

  <link rel="canonical" href={fullUrl} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonLdScript}

  <meta name="description" content={description} />

  <meta name="og:site_name" content="Czech Theater" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content={fullUrl} />
  <meta property="og:type" content={'website'} />
  <meta property="og:title" content={title || "Czech Theater"} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
</svelte:head>
