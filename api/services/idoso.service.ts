import { CloudFunctionDataResponse, IdosoInterface } from '@/api/interfaces';
import { FIREBASE_FUNCTIONS, FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, DocumentData, DocumentSnapshot, onSnapshot } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

const createIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-createIdoso');
const deleteIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-deleteIdoso');

export const createIdoso = async (data: IdosoInterface) => {
	try {
		const result = (await createIdosoCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: any) {
		console.error(error);
	}
};

export const deleteIdoso = async () => {
	try {
		const result = (await deleteIdosoCallback()) as CloudFunctionDataResponse;
		return result;
	} catch (error: any) {
		console.error(error);
	}
};

export const listenIdosoChanges = (id: string, callback: (data: DocumentData | null) => void) => {
	const docRef = doc(FIRESTORE_DB, 'idosos', id);

	const unsubscribe = onSnapshot(docRef, (docSnapshot: DocumentSnapshot<DocumentData>) => {
		if (docSnapshot.exists()) {
			callback({ id: docSnapshot.id, ...docSnapshot.data() });
		} else {
			callback(null);
		}
	});

	return unsubscribe;
};
