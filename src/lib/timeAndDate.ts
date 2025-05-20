import type { Show } from '../kontent-types';

/**
 * Turn a timestamp into a long-form date (like 17 May 1982).
 * If no timestamp is passed, returns today.
 **/
export const getDateFromDateString = (dateString: string | null) =>
  new Date(dateString || '').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

/**
 * Turn a timestamp into a long-form month (like May 1982).
 * If no timestamp is passed, returns the current month.
 **/
export const getMonthFromDateString = (dateString: string | null) =>
  new Date(dateString || '').toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  });

export const sortShows = (showA: Show, showB: Show): number =>
  Date.parse(showA.elements.premiere.value || '') -
  Date.parse(showB.elements.premiere.value || '');

/**
 * Check whether the show's premiere comes after 2 weeks ago.
 **/
export const isShowInFuture = (showPremiere: string): boolean =>
  new Date(showPremiere) >= new Date(Date.now() - 12096e5);
