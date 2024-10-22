<script lang="ts">
  import MediaQuery from 'svelte-media-queries';

  import type { ElementModels } from '@kontent-ai/delivery-sdk';
  import ImageConstrainedOneDimension from './ImageConstrainedOneDimension.svelte';
  import SvgIcon from './SvgIcon.svelte';
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import { getHeightAndWidth } from '$lib/calculateHeightWidthConstraints';
  import { Image } from '@unpic/svelte';

  let {
    carouselItems
  }: {
    carouselItems: ElementModels.AssetModel[];
  } = $props();

  let currentSlideItem = $state(0);
  let baseImageWidth = $state(826);

  let SlideDivHeight = $derived.by(() => {
    const { height } = getHeightAndWidth({
      image: carouselItems[currentSlideItem],
      width: baseImageWidth
    });
    return height || 500;
  });

  const setBaseImageWidth = (
    _node: HTMLDivElement,
    calculatedImageWidth: number
  ) => {
    baseImageWidth = calculatedImageWidth;
  };

  const switchToItem = (item: number) => {
    currentSlideItem = item;
  };

  const nextItem = () => {
    switchToItem((currentSlideItem + 1) % carouselItems.length);
  };
  const prevItem = () => {
    if (currentSlideItem != 0) {
      switchToItem((currentSlideItem - 1) % carouselItems.length);
    } else {
      switchToItem(carouselItems.length - 1);
    }
  };

  const navButtonClasses =
    'flex min-w-16 py-8 sm:py-0 items-center justify-center absolute opacity-60 bg-white z-10 sm:relative top-[calc(50%-44px)] hover:bg-slate-200 focus:bg-slate-200';
</script>

<section aria-label="gallery-carousel">
  <div class="relative flex">
    {#if carouselItems.length > 1}
      <button onclick={prevItem} class={`${navButtonClasses} left-0`}>
        <SvgIcon path={mdiChevronLeft} alt="Previous image" />
      </button>
    {/if}
    <div class="mx-auto flex overflow-hidden">
      <MediaQuery
        query={[
          '(max-width: 640px',
          '(min-width: 640px) and (max-width: 768px)',
          '(min-width: 768px) and (max-width: 1280px)',
          '(min-width: 1280px)'
        ]}
        let:matches
      >
        <!-- eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -->
        {@const [_base, small, medium, xlarge] = matches}
        {@const imageWidth = xlarge ? 826 : medium ? 608 : small ? 480 : 340}
        {@const offset = currentSlideItem * imageWidth}
        <div
          class="flex max-w-[338px] transition-transform duration-500 motion-reduce:transition-none sm:max-w-[480px] md:max-w-min"
          style:transform={`translateX(-${offset}px) scaleX(1)`}
          use:setBaseImageWidth={imageWidth}
          style:max-height={`${SlideDivHeight}px`}
          role="group"
        >
          {#each carouselItems as item, itemIndex}
            {@const imageNumber = itemIndex + 1}
            {@const hide = itemIndex === currentSlideItem ? false : true}
            <div
              class="my-auto min-w-[340px] max-w-[340px] sm:min-w-[480px] md:min-w-[608px] md:max-w-[calc(65ch-8rem)] xl:min-w-[826px] xl:max-w-[826px]"
              aria-hidden={hide}
              aria-label={`Image ${imageNumber} of ${carouselItems.length}`}
              id={`carousel-image-${imageNumber}`}
            >
              <ImageConstrainedOneDimension
                image={item}
                width={826}
                priority={itemIndex === 0}
              />
            </div>
          {/each}
        </div>
      </MediaQuery>
    </div>
    {#if carouselItems.length > 1}
      <button onclick={nextItem} class={`${navButtonClasses} right-0`}>
        <SvgIcon path={mdiChevronRight} alt="Next image" />
      </button>
    {/if}
  </div>

  {#if carouselItems.length > 1}
    <div class="mt-2 overflow-x-scroll whitespace-nowrap">
      {#each carouselItems as currentImage, itemIndex}
        {@const imageNumber = itemIndex + 1}
        <button
          class={`mx-1 box-content ${itemIndex === currentSlideItem ? 'border-4 border-slate-400' : ''}`}
          onclick={() => switchToItem(itemIndex)}
          aria-current={itemIndex === currentSlideItem ? 'true' : 'false'}
          aria-controls={`carousel-image-${imageNumber}`}
        >
          <Image
            src={currentImage.url}
            alt={`Switch to image ${itemIndex}`}
            height={84}
            width={84}
            layout="fixed"
          />
        </button>
      {/each}
    </div>
  {/if}
</section>
