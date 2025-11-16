import { IdosoInterface, CloudFunctionDataResponse } from '@/api/interfaces';
import { FIREBASE_FUNCTIONS } from '@/FirebaseConfig';
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
