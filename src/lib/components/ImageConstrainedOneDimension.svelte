<script lang="ts">
  import { getHeightAndWidth } from '$lib/calculateHeightWidthConstraints';
  import { Image } from '@unpic/svelte';

  interface Rendition {
    rendition_id: string;
    preset_id: string;
    width: number;
    height: number;
    query: string;
    url: string;
  }

  interface AssetModel {
    /**
     * Name of the asset
     */
    name: string;
    /**
     * Type of the asset
     */
    type: string;
    /**
     * Size of the asset
     */
    size: number;
    /**
     * Description of the asset
     */
    description: string | null;
    /**
     * Url of the asset
     */
    url: string;
    /**
     * Width in pixels for image assets
     */
    width: number | null;
    /**
     * Height in pixels for image assets
     */
    height: number | null;

    renditions: { [renditionPresetCodename: string]: Rendition } | null;
  }

  interface BasicProps {
    image: AssetModel;
    priority?: boolean;
  }

  interface ConstrainedHeight extends BasicProps {
    height: number;
    width?: never;
  }

  interface ConstrainedWidth extends BasicProps {
    height?: never;
    width: number;
  }

  let { image, height, width, priority }: ConstrainedHeight | ConstrainedWidth =
    $props();

  const { height: finalHeight = 0, width: finalWidth = 0 } = getHeightAndWidth({
    image,
    height,
    width
  });
</script>

<Image
  src={image.url}
  alt={image.description}
  height={finalHeight}
  width={finalWidth}
  layout="constrained"
  priority={Boolean(priority)}
/>
