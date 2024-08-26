<script lang="ts">
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { Image } from '@unpic/svelte';
  import type { FixedSizeImage } from '../../../kontent-types';

  // Temporary fix for: https://github.com/sveltejs/eslint-plugin-svelte/issues/804
  interface ComponentProps {
    portableText: CustomBlockComponentProps;
  }
  // Property custom marks receive from @portabletext/svelte when redered
  let { portableText } = $props() as ComponentProps;

  const linkedItems = portableText.global.context
    .linkedItems as FixedSizeImage[];

  const linkedItem = linkedItems.find(
    (item) => item.system.codename === portableText.value.component._ref // eslint-disable-line @typescript-eslint/no-unsafe-member-access
  );
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
