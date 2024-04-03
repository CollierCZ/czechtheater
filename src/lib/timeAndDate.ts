export const getDateFromDateString = (dateString: string | null) =>
	new Date(dateString || '').toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
