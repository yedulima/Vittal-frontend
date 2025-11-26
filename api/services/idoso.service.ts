import { AddMedicinePayload, CloudFunctionDataResponse, IdosoInterface, UpdateMedicinePayload } from '@/api/interfaces';
import { FIREBASE_FUNCTIONS, FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, DocumentData, DocumentSnapshot, onSnapshot } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

const createIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-createIdoso');
const updateIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-updateIdoso');
const getIdosoByIdCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-getIdosoById');
const getMedicationsByUserIdCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-getMedicationsByUserId');
const addMedicationCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-addMedication');
const updateMedicationCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-updateMedication');
const toggleMedicationStatusCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-toggleMedicationStatus');
const deleteMedicationCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-deleteMedication');
const deleteIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'idosoFunctions-deleteIdoso');

export const createIdoso = async (data: IdosoInterface) => {
	try {
		const result = (await createIdosoCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const updateIdoso = async (data: IdosoInterface) => {
	try {
		const result = (await updateIdosoCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const getIdosoById = async (userId: string) => {
	try {
		const result = (await getIdosoByIdCallback({ userId: userId })) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const getMedicationsByUserId = async (userId: string) => {
	try {
		const result = (await getMedicationsByUserIdCallback({ userId: userId })) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const addMedication = async (data: AddMedicinePayload) => {
	try {
		const result = (await addMedicationCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const updateMedication = async (data: UpdateMedicinePayload) => {
	try {
		const result = (await updateMedicationCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const toggleMedicationStatus = async (data: { userId: string; medicationId: string }) => {
	try {
		const result = (await toggleMedicationStatusCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const deleteMedication = async (data: { userId: string; medicationId: string }) => {
	try {
		const result = (await deleteMedicationCallback(data)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
	}
};

export const deleteIdoso = async () => {
	try {
		const result = (await deleteIdosoCallback()) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Idoso service error: ${error}`);
		}
		throw error;
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
