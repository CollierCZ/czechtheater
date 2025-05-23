
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
import type { Show } from './index.js';

/**
 * Future shows
 *
 * Id: 1af01b6f-0b46-4c8c-9a92-1e177d11569f
 * Codename: future_shows
 */
export type FutureShows = CoreContentType<
    FutureShowsElementCodenames,
    {
        /**
         * Shows
         *
         * Type: modular_content
         * Required: true
         * Codename: shows
         * Id: b66bf432-77bc-499b-a215-5bb54a6427a4
         */
        readonly shows: Elements.LinkedItemsElement<Show>;
    },
    'future_shows'
>;

/**
 * Type representing all available element codenames for Future shows
 */
export type FutureShowsElementCodenames = 'shows';

/**
 * Type guard for Future shows
 *
 * Id: 1af01b6f-0b46-4c8c-9a92-1e177d11569f
 * Codename: future_shows
 */
export function isFutureShows(item: CoreContentType | undefined | null): item is FutureShows {
    return item?.system?.type === 'future_shows';
}
