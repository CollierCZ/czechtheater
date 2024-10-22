import type { Show } from '../kontent-types';

export const getDateFromDateString = (dateString: string | null) =>
  new Date(dateString || '').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  export const getMonthFromDateString = (dateString: string | null) =>
    new Date(dateString || '').toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric'
    });

export const sortShows = (showA: Show, showB: Show): number =>
  Date.parse(showA.elements.premiere.value || '') -
  Date.parse(showB.elements.premiere.value || '');
