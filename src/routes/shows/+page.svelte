<script lang="ts">
  import type { PageData } from './$types';

  import Title from '$lib/components/Title.svelte';
  import { getDateFromDateString, isShowInFuture } from '$lib';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import { resolve } from '$app/paths';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;
</script>

<Seo
  description="A list of all of the shows that Czech Theater has put on."
  slug="/shows"
  title="Past Shows"
/>

<Title>Past Shows</Title>

{#each data.pastSeasons as season (season.system.codename)}
  {@const seasonData = season.elements}
  <h2 class="mb-4 text-center text-3xl font-medium xl:text-4xl">
    {seasonData.season_start_year.value}–{seasonData.season_end_year.value} Season:
    {seasonData.season_name.value}
  </h2>
  {#each seasonData.shows.linkedItems as show (show.system.codename)}
    {@const showData = show.elements}
    {@const showPremier = showData.premiere.value}
    {#if !isShowInFuture(showPremier || '')}
      {@const showMainImage = showData.main_image.value[0]}
      <a href={resolve(`/shows/${showData.url.value}`)}>
        <div
          class="mr-8 mb-12 origin-left grid-cols-2 gap-4 transition delay-150 ease-in-out hover:scale-107 focus:scale-107 motion-reduce:hover:transform-none md:mr-0 md:grid md:origin-center"
        >
          <ImageConstrainedOneDimension image={showMainImage} height={300} />

          <div class="mt-2 md:mt-0">
            <h3
              class="mb-4 font-medium underline hover:no-underline focus:no-underline"
            >
              {showData.name.value}
            </h3>
            <p class="mb-4">{showData.short_description.value}</p>
            <p>Premiere: {getDateFromDateString(showPremier)}</p>
          </div>
        </div>
      </a>
    {/if}
  {/each}
{/each}
