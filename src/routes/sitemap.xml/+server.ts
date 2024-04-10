import type { RequestHandler } from '@sveltejs/kit';
import { kontentConnector } from '$lib';
import { type Show } from '../../kontent-types';

export const GET: RequestHandler = async () => {
	const allShows = await kontentConnector().items<Show>().toPromise();

	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${3600}`,
		'Content-Type': 'application/xml'
	};

	const body = xmlify(allShows.data.items).trim();

	return new Response(body, { headers: headers, status: 200});
};

const baseUrl = 'https://czechtheater.cz';
const pages = ['auditions', 'shows', 'fact', 'about', 'contact'];

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
    <changefreq>yearly</changefreq>
  </url>
    `
		)
		.join('')}
  ${shows.filter(show => show.elements.url)
		.map(
			(show) => `
  <url>
    <loc>${baseUrl}/shows/${show.elements.url.value}</loc>
    <changefreq>monthly</changefreq>
  </url>
    `
		)
		.join('')}
</urlset>
`;
