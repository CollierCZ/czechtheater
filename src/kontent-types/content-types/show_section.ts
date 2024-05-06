import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Show } from './show';

/**
 * Generated by '@kontent-ai/model-generator@7.0.3'
 *
 * Show section
 * Id: 226abb6f-1a06-428f-a1f3-2cbaac5f6df1
 * Codename: show_section
 */
export type ShowSection = IContentItem<{
    /**
     * Shows (modular_content)
     * Required: true
     * Id: 3f4b98ae-8b45-4f97-8bcb-195921fb2ec7
     * Codename: shows
     *
     * What shows to include in this section
     */
    shows: Elements.LinkedItemsElement<Show>;
}>;
