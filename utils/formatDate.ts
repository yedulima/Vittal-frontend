export const formatDate = (value: string) => {
	const cleaned = value.replace(/\D/g, '');
	let formatted = cleaned;

	if (cleaned.length > 2 && cleaned.length <= 4) {
		formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
	} else if (cleaned.length > 4) {
		formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
	}

	return formatted;
};
