<script lang="ts">
  import type { PageData } from './$types';

  import Title from '$lib/components/Title.svelte';
  import { getDateFromDateString, isShowInFuture } from '$lib';
  import ImageConstrainedOneDimension from '$lib/components/ImageConstrainedOneDimension.svelte';
  import Seo from '$lib/components/Seo.svelte';

  export let data: PageData;
</script>

<Seo
  description="A list of all of the shows that Czech Theater has put on."
  slug={`/shows`}
  title="Past Shows"
/>

<Title>Past Shows</Title>

{#each data.pastSeasons as season}
  {@const seasonData = season.elements}
  <h2 class="mb-4 text-center text-3xl font-medium xl:text-4xl">
    {seasonData.season_start_year.value}–{seasonData.season_end_year.value} Season:
    {seasonData.season_name.value}
  </h2>
  {#each seasonData.shows.linkedItems as show}
    {@const showData = show.elements}
    {@const showPremier = showData.premiere.value}
    {#if !isShowInFuture(showPremier || '')}
      {@const showMainImage = showData.main_image.value[0]}
      <div class="mb-12 grid-cols-2 gap-4 md:grid">
        <div
          class="origin-left transition delay-150 ease-in-out hover:scale-105 focus:scale-105 motion-reduce:hover:transform-none md:origin-center"
        >
          <a href={`/shows/${showData.url.value}`}>
            <ImageConstrainedOneDimension image={showMainImage} height={300} />
          </a>
        </div>
        <div class="mt-2 md:mt-0">
          <a
            class="underline hover:no-underline focus:no-underline"
            href={`/shows/${showData.url.value}`}
            ><h3 class="mb-4 font-medium">{showData.name.value}</h3></a
          >
          <p class="mb-4">{showData.short_description.value}</p>
          <p>Premiere: {getDateFromDateString(showPremier)}</p>
        </div>
      </div>
    {/if}
  {/each}
{/each}
