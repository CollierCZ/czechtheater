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

  const getNumberOfCaptionRows = (
    caption: string,
    small: boolean,
    medium: boolean,
    xlarge: boolean
  ): number => {
    const divideAndRoundUp = (denominator: number) =>
      Math.ceil(caption.length / denominator);
    if (xlarge) {
      return divideAndRoundUp(91);
    } else if (medium) {
      return divideAndRoundUp(80);
    } else if (small) {
      return divideAndRoundUp(57);
    } else {
      return divideAndRoundUp(40);
    }
  };
  const getCaptionOffset = (
    caption: string,
    small: boolean,
    medium: boolean,
    xlarge: boolean
  ): number => {
    const numberOfCaptionRows = getNumberOfCaptionRows(
      caption,
      Boolean(small),
      Boolean(medium),
      Boolean(xlarge)
    );
    if (xlarge) {
      return numberOfCaptionRows * 32;
    }
    return numberOfCaptionRows * 28;
  };
  const captionOffset = getCaptionOffset(
    caption,
    Boolean(small),
    Boolean(medium),
    Boolean(xlarge)
  );
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
