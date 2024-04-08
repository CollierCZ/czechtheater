import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';

import TicketLink from '../TicketLink.svelte';

test('ticket link exists with proper empty title', () => {
	render(TicketLink, { link: 'https://example.org/' });

	const link = screen.getByText('Tickets');
	const ticketIcon = screen.getByTitle('');

	expect(link).toBeInTheDocument();
	expect(ticketIcon).toBeInTheDocument();
});
