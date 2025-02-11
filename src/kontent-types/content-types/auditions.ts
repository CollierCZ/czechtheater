import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.4.0'
 *
 * Auditions
 * Id: 16dea75b-52d3-4f3b-993f-837b1a443c9b
 * Codename: auditions
 */
export type Auditions = IContentItem<{
  /**
   * Audition date (date_time)
   * Required: false
   * Id: 5d294dba-4b71-4018-b7b3-db248f1e6d43
   * Codename: audition_date
   */
  audition_date: Elements.DateTimeElement;

  /**
   * Link to audition event (text)
   * Required: false
   * Id: 832dfc8c-8865-46bc-b2af-7761c4c8f233
   * Codename: link_to_audition_event
   *
   * Such as on Facebook
   */
  link_to_audition_event: Elements.TextElement;

  /**
   * Upcoming auditions description (rich_text)
   * Required: true
   * Id: f6ecb711-72b0-4881-9845-7a17c6f9633a
   * Codename: upcoming_auditions_description
   */
  upcoming_auditions_description: Elements.RichTextElement;
}>;
