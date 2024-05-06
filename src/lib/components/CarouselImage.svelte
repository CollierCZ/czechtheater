<script lang="ts">
  import type { ElementModels } from '@kontent-ai/delivery-sdk';
  import ImageConstrainedOneDimension from './ImageConstrainedOneDimension.svelte';

  let {
    isFirstImage,
    imageNumber,
    image,
    hide,
    caption,
    SlideDivHeight,
    totalImagesLength,
    small,
    medium,
    xlarge
  }: {
    isFirstImage: boolean;
    imageNumber: number;
    image: ElementModels.AssetModel;
    hide: boolean;
    caption: string;
    SlideDivHeight: number;
    totalImagesLength: number;
    small: boolean;
    medium: boolean;
    xlarge: boolean;
  } = $props();

  let captionOffset = $derived.by(() => {
    const getNumberOfCaptionRows = (): number => {
      const divideAndRoundUp = (denominator: number) =>
        Math.ceil(caption.length / denominator);

      if (xlarge) {
        return divideAndRoundUp(80);
      } else if (medium) {
        return divideAndRoundUp(74);
      } else if (small) {
        return divideAndRoundUp(60);
      } else {
        return divideAndRoundUp(40);
      }
    };

    const getCaptionOffset = (): number => {
      const numberOfCaptionRows = getNumberOfCaptionRows();
      if (xlarge) {
        return numberOfCaptionRows * 32;
      }
      return numberOfCaptionRows * 28;
    };

    return getCaptionOffset();
  });
</script>

<div
  class="my-auto min-w-[340px] max-w-[340px] sm:min-w-[480px] md:min-w-[608px] md:max-w-[calc(65ch-8rem)] xl:min-w-[826px] xl:max-w-[826px]"
  aria-hidden={hide}
  aria-label={`Image ${imageNumber} of ${totalImagesLength}`}
  id={`carousel-image-${imageNumber}`}
  style:max-height={`${SlideDivHeight + (caption ? captionOffset : 0)}px`}
>
  <figure>
    <ImageConstrainedOneDimension {image} width={826} priority={isFirstImage} />
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
</div>
