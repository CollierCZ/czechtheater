
/** 
* This file has been auto-generated by '@kontent-ai/model-generator@8.1.2'.
* 
* (c) Kontent.ai
*  
* -------------------------------------------------------------------------------
* 
* Project: Czech Theater
* Environment: Production
* Id: fb599585-baec-0077-1624-981d3321fff0
* 
* -------------------------------------------------------------------------------
**/

import type { Elements } from '@kontent-ai/delivery-sdk';
import type { CoreContentType } from '../system/index.js';

/**
 * Theater fact
 *
 * Id: 7ab02166-03c6-4491-b095-61ffca6f0c20
 * Codename: theater_fact
 */
export type TheaterFact = CoreContentType<
    TheaterFactElementCodenames,
    {
        /**
         * Description
         *
         * Type: rich_text
         * Required: false
         * Codename: description
         * Id: 56cf0d02-f9f3-4696-bddd-4549b9db7961
         */
        readonly description: Elements.RichTextElement<CoreContentType>;
        /**
         * Image
         *
         * Type: asset
         * Required: false
         * Codename: image
         * Id: 63ee712a-1202-4446-9b1c-51dedab57161
         */
        readonly image: Elements.AssetsElement;
    },
    'theater_fact'
>;

/**
 * Type representing all available element codenames for Theater fact
 */
export type TheaterFactElementCodenames = 'description' | 'image';

/**
 * Type guard for Theater fact
 *
 * Id: 7ab02166-03c6-4491-b095-61ffca6f0c20
 * Codename: theater_fact
 */
export function isTheaterFact(item: CoreContentType | undefined | null): item is TheaterFact {
    return item?.system?.type === 'theater_fact';
}
