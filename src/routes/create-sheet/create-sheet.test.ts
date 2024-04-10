import { fireEvent, render, screen, within } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import CreateSheetPage from './+page.svelte';
import type { XLSX$Utils, WorkBook } from 'xlsx';

const emailText = 'Email';
const ticketText = 'Number of Tickets';
const createSheetText = 'Create sheet';
const addPersonText = 'Add another person';

describe('Create Sheet page', () => {
	it('should start with one row and the right buttons', () => {
		render(CreateSheetPage);

		const heading = screen.getByRole('heading');
		const child = within(heading).getByText('Create File To Invite People');

		const emailInput = screen.getByLabelText(emailText);
		const ticketSelector = screen.getByLabelText(ticketText);

		const createSheetButton = screen.getByText(createSheetText);
		const addPersonButton = screen.getByText(addPersonText);

		expect(child).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(ticketSelector).toBeInTheDocument();
		expect(createSheetButton).toBeInTheDocument();
		expect(addPersonButton).toBeInTheDocument();
	});

	it('should add more rows', async () => {
		render(CreateSheetPage);

		const addPersonButton = screen.getByText(addPersonText);
		await fireEvent.click(addPersonButton);

		const emailInput = screen.getAllByLabelText(emailText);
		const ticketSelector = screen.getAllByLabelText(ticketText);

		expect(emailInput.length).toEqual(2);
		expect(ticketSelector.length).toEqual(2);
	});

	it('should change after submission', async () => {
		render(CreateSheetPage);

		interface ImportedXlsx {
			utils: XLSX$Utils;
		}

		vi.mock('xlsx', async (importOriginal) => {
			const actualXlsx: ImportedXlsx = await importOriginal();
			return {
				utils: actualXlsx.utils,
				writeFile: vi.fn().mockImplementation((_workbook: WorkBook, _fileName: string) => {})
			};
		});

		const createSheetButton = screen.getByText(createSheetText);
		await fireEvent.click(createSheetButton);

		const emailInput = screen.queryByLabelText(emailText);
		const ticketSelector = screen.queryByLabelText(ticketText);
		const submittedText = screen.getByTestId('submittedText');

		expect(emailInput).not.toBeInTheDocument();
		expect(ticketSelector).not.toBeInTheDocument();
		expect(submittedText).toBeInTheDocument();
	});
});
