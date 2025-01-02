<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { Image } from '@unpic/svelte';
  import type { FixedSizeImage } from '../../../kontent-types';
  import type { Reference } from '@kontent-ai/rich-text-resolver';

  // Property custom marks receive from @portabletext/svelte when redered
  let {
    portableText
  }: {
    portableText: CustomBlockComponentProps;
  } = $props();

  const linkedItems = portableText.global.context
    .linkedItems as FixedSizeImage[];

  const linkedItem = linkedItems.find((item) => {
    const comp = portableText.value.component as Reference;
    return item.system.codename === comp._ref;
  });
  const componentType = linkedItem?.system.type;
</script>

{#if componentType === 'fixed_size_image' && linkedItem}
  {@const imageData = linkedItem.elements.image.value[0]}
  <Image
    src={imageData.url}
    alt={imageData.description}
    layout="fixed"
    height={linkedItem.elements.height.value || 200}
    width={linkedItem.elements.width.value || 90}
  />
{/if}
