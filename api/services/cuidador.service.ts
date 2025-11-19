import { CloudFunctionDataResponse, CuidadorInterface } from '@/api/interfaces';
import { FIREBASE_FUNCTIONS } from '@/FirebaseConfig';
import { httpsCallable } from 'firebase/functions';

const createCuidadorCallback = httpsCallable(FIREBASE_FUNCTIONS, 'cuidadorFunctions-createCuidador');
const addIdosoCallback = httpsCallable(FIREBASE_FUNCTIONS, 'cuidadorFunctions-addIdoso');
const listIdososCallback = httpsCallable(FIREBASE_FUNCTIONS, 'cuidadorFunctions-listIdosos');
const deleteCuidadorCallback = httpsCallable(FIREBASE_FUNCTIONS, 'cuidadorFunctions-deleteCuidador');

export const createCuidador = async (data: CuidadorInterface) => {
	try {
		const result = await createCuidadorCallback(data);
		return result;
	} catch (error: any) {
		console.error(error);
	}
};

export const addIdoso = async (userId: string) => {
	try {
		const result = (await addIdosoCallback({ user_ref: userId })) as CloudFunctionDataResponse;
		return result;
	} catch (error: any) {
		console.error(error);
		throw error;
	}
};

export const listIdosos = async () => {
	try {
		const result = (await listIdososCallback()) as CloudFunctionDataResponse;
		return result;
	} catch (error: any) {
		console.error(error);
	}
};

export const deleteCuidador = async () => {
	try {
		const result = (await deleteCuidadorCallback()) as CloudFunctionDataResponse;
		return result;
	} catch (error: any) {
		console.error(error);
	}
};
