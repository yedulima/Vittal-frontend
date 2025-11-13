export const convertDMYToYMD = (dateString: string): string => {
	if (!dateString || dateString.indexOf('/') === -1 || dateString.length !== 10) {
		return '';
	}
	const [day, month, year] = dateString.split('/');
	if (day && month && year) {
		return `${year}-${month}-${day}`;
	}
	return '';
};
