export const checkValidDate = (value: string) => {
	const [d, m, a] = value.split('/').map(Number);
	const data = new Date(a, m - 1, d);
	const hoje = new Date();
	return (
		/^\d{2}\/\d{2}\/\d{4}$/.test(value) &&
		data.getDate() === d &&
		data.getMonth() === m - 1 &&
		data.getFullYear() === a &&
		data <= hoje
	);
};
