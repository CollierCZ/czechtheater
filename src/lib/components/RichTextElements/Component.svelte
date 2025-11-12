<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { Image } from '@unpic/svelte';
  import type {
    _2ColumnLayoutType,
    CallToActionButtonType,
    FixedSizeImageType,
    TrailerType
  } from '../../../kontent-types';
  import type { Reference } from '@kontent-ai/rich-text-resolver';
  import LinkButton from '../LinkButton.svelte';
  import Trailer from './Trailer.svelte';
  import Columns from './Columns.svelte';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    portableText
  }: {
    portableText: CustomBlockComponentProps;
  } = $props();

  const linkedItems = portableText.global.context.linkedItems as
    | _2ColumnLayoutType[]
    | FixedSizeImageType[]
    | CallToActionButtonType[]
    | TrailerType[];

  const linkedItem = linkedItems.find((item) => {
    const comp = portableText.value.componentOrItem as Reference;
    return item.system.codename === comp._ref;
  });
  const componentType = linkedItem?.system.type;
</script>

{#if componentType === 'fixed_size_image' && linkedItem}
  {#if 'image' in linkedItem.elements}
    {@const imageData = linkedItem.elements.image?.value[0]}
    <Image
      src={imageData.url}
      alt={imageData.description}
      layout="fixed"
      height={linkedItem.elements.height.value || 200}
      width={linkedItem.elements.width.value || 90}
    />
  {/if}
{:else if componentType === 'call_to_action_button' && linkedItem}
  {#if 'button_text' in linkedItem.elements}
    {@const buttonData = linkedItem.elements}
    <LinkButton link={buttonData.url.value}>
      {buttonData.button_text.value}
    </LinkButton>
  {/if}
{:else if componentType === 'trailer' && linkedItem}
  {@const trailerItem = linkedItem as TrailerType}
  {@const trailerData = trailerItem.elements}
  <Trailer
    video={trailerData.trailer_video}
    videoSmall={trailerData.trailer_video_small}
    link={trailerData.link_to_video_hosted_elsewhere.value}
  />
{:else if componentType === 'n2_column_layout' && linkedItem}
  {@const layoutItem = linkedItem as _2ColumnLayoutType}
  {@const layoutData = layoutItem.elements}
  <Columns left={layoutData.left_side} right={layoutData.right_side} />
{/if}
