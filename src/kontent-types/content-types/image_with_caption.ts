import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Image with caption
 * Id: 21a8e9bb-154b-490a-ba51-d2f1ac84ece2
 * Codename: image_with_caption
 */
export type ImageWithCaption = IContentItem<{
  /**
   * Caption (text)
   * Required: false
   * Id: 978324a2-369b-4926-86c3-f69af67a2172
   * Codename: caption
   */
  caption: Elements.TextElement;

  /**
   * Image (asset)
   * Required: true
   * Id: e04882ec-3683-4e88-a5bb-cc599cbb4056
   * Codename: image
   */
  image: Elements.AssetsElement;
}>;