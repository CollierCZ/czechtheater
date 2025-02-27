import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.4.0'
 *
 * Call to Action Button
 * Id: 7f62781c-8290-4580-8a34-9dbae5deb7ad
 * Codename: call_to_action_button
 */
export type CallToActionButton = IContentItem<{
  /**
   * Button text (text)
   * Required: true
   * Id: 681680b9-95a3-4888-b9df-0c9d6b97812e
   * Codename: button_text
   *
   * What text people will see
   */
  button_text: Elements.TextElement;

  /**
   * URL (text)
   * Required: true
   * Id: ad6c3f81-50df-4dc4-bf43-009335f06187
   * Codename: url
   *
   * Where people go after clicking the button
   */
  url: Elements.TextElement;
}>;
