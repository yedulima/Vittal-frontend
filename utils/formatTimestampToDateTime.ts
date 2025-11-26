export interface FirestoreTimestamp {
	nanoseconds: number;
	seconds: number;
	type: string;
}

export const formatTimestampToDateTime = (firestoreTimestamp: FirestoreTimestamp): string => {
	if (
		!firestoreTimestamp ||
		typeof firestoreTimestamp.seconds !== 'number' ||
		typeof firestoreTimestamp.nanoseconds !== 'number'
	) {
		console.error('Objeto Firestore Timestamp inválido ou incompleto.');
		return '';
	}

	const { seconds, nanoseconds } = firestoreTimestamp;

	const secondsInMs = seconds * 1000;

	const nanosecondsInMs = nanoseconds / 1000000;

	const totalMilliseconds = secondsInMs + nanosecondsInMs;

	const date = new Date(totalMilliseconds);

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	return new Intl.DateTimeFormat('pt-BR', options).format(date);
};
