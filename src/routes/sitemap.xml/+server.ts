import type { RequestHandler } from '@sveltejs/kit';
import { kontentConnector } from '$lib';
import type { Show, PastShows } from '../../kontent-types';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const pastShowsItem = await kontentConnector()
    .item<PastShows>('past_shows')
    .depthParameter(2)
    .toPromise();
  const pastShowSeasons = pastShowsItem.data.item.elements.seasons.linkedItems;

  const pastShows = pastShowSeasons.reduce((pastShowsAcc, season): Show[] => {
    return [...pastShowsAcc, ...season.elements.shows.linkedItems];
  }, [] as Show[]);

  const headers = {
    'Cache-Control': `max-age=20160, s-maxage=20160`,
    'Content-Type': 'application/xml'
  };

  const body = xmlify(pastShows).trim();

  return new Response(body, { headers: headers, status: 200 });
};

const baseUrl = 'https://czechtheater.cz';
const pagesWithUpdates = ['shows', 'auditions', 'fact'];
const pagesNotUpdated = ['about', 'contact'];
const pages = pagesWithUpdates.concat(pagesNotUpdated);

const xmlify = (shows: Show[]) => `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
 >
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>monthly</changefreq>
  </url>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>${pagesWithUpdates.includes(page) ? 'monthly' : 'yearly'}</changefreq>
  </url>
    `
    )
    .join('')}
  ${shows
    .filter((show) => show.system.codename !== 'unknown_show')
    .filter((show) => show.elements.url)
    .map(
      (show) => `
  <url>
    <loc>${baseUrl}/shows/${show.elements.url.value}</loc>
    <changefreq>monthly</changefreq>
    <lastmod>${show.system.lastModified}</lastmod>
  </url>
    `
    )
    .join('')}
</urlset>
`;
