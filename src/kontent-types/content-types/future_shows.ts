import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Show } from './show.js';

/**
 * Generated by '@kontent-ai/model-generator@7.4.0'
 *
 * Future shows
 * Id: 1af01b6f-0b46-4c8c-9a92-1e177d11569f
 * Codename: future_shows
 */
export type FutureShows = IContentItem<{
  /**
   * Shows (modular_content)
   * Required: true
   * Id: b66bf432-77bc-499b-a215-5bb54a6427a4
   * Codename: shows
   */
  shows: Elements.LinkedItemsElement<Show>;
}>;
