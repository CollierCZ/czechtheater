<script lang="ts">
  import { MediaQuery } from 'svelte/reactivity';

  import SvgIcon from './SvgIcon.svelte';
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import { getHeightAndWidth } from '$lib/calculateHeightWidthConstraints';
  import { Image } from '@unpic/svelte';
  import type { ImageWithCaption } from '../../kontent-types';
  import CarouselImage from './CarouselImage.svelte';

  let {
    carouselItems
  }: {
    carouselItems: ImageWithCaption[];
  } = $props();

  let currentSlideItem = $state(0);
  let baseImageWidth = $state(826);

  let SlideDivHeight = $derived.by(() => {
    const currentImageWithCaption = carouselItems[currentSlideItem].elements;
    const { height } = getHeightAndWidth({
      image: currentImageWithCaption.image.value[0],
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

  // Set media queries to get sizes for images
  const xlarge = new MediaQuery('(min-width: 1280px)');
  const medium = new MediaQuery('(min-width: 768px) and (max-width: 1280px)');
  const small = new MediaQuery('(min-width: 640px) and (max-width: 768px)');
  const imageWidth = $derived(
    xlarge.current ? 826 : medium.current ? 608 : small.current ? 480 : 340
  );
  const offset = $derived(currentSlideItem * imageWidth);
</script>

<section aria-label="gallery-carousel">
  <div class="relative flex">
    {#if carouselItems.length > 1}
      <button onclick={prevItem} class={`${navButtonClasses} left-0`}>
        <SvgIcon path={mdiChevronLeft} alt="Previous image" />
      </button>
    {/if}
    <div class="mx-auto flex overflow-hidden">
      <div
        class="flex max-w-[338px] transition-transform duration-500 motion-reduce:transition-none sm:max-w-[480px] md:max-w-min"
        style:transform={`translateX(-${offset}px) scaleX(1)`}
        use:setBaseImageWidth={imageWidth}
        role="group"
      >
        {#each carouselItems as item, itemIndex}
          {@const imageNumber = itemIndex + 1}
          {@const image = item.elements.image.value[0]}
          {@const hide = itemIndex === currentSlideItem ? false : true}
          {@const caption = item.elements.caption.value}
          <CarouselImage
            isFirstImage={itemIndex === 0}
            small={Boolean(small)}
            medium={Boolean(medium)}
            xlarge={Boolean(xlarge)}
            {imageNumber}
            {image}
            {hide}
            {caption}
            {SlideDivHeight}
            totalImagesLength={carouselItems.length}
          />
        {/each}
      </div>
    </div>
    {#if carouselItems.length > 1}
      <button onclick={nextItem} class={`${navButtonClasses} right-0`}>
        <SvgIcon path={mdiChevronRight} alt="Next image" />
      </button>
    {/if}
  </div>

  {#if carouselItems.length > 1}
    <div class="mt-2 overflow-x-scroll whitespace-nowrap">
      {#each carouselItems as item, itemIndex}
        {@const currentImage = item.elements.image.value[0]}
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
