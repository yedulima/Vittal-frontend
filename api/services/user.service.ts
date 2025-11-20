import { CloudFunctionDataResponse, CuidadorInterface, IdosoInterface, UserInterface } from '@/api/interfaces';
import { createCuidador } from '@/api/services/cuidador.service';
import { createIdoso } from '@/api/services/idoso.service';
import { FIREBASE_FUNCTIONS } from '@/FirebaseConfig';
import { formatAndUploadImage } from '@/utils/formatAndUploadImage';
import { httpsCallable } from 'firebase/functions';

const createUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-createUser');
const getUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-getUserById');
const listUsersCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-listUsers');
const updateUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-updateUser');
const deleteUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-deleteUser');

export const createUser = async (uid: string, data: UserInterface) => {
	try {
		const finalPhotoURL: string | null = await formatAndUploadImage(data.photoURL, uid);

		const finalData = {
			email: data.email,
			name: data.name,
			photoURL: finalPhotoURL,
			role: data.role,
			birthday: data.birthday,
			phoneNumber: data.phoneNumber,
		};

		if (data.role === 'cuidador') {
			await createCuidador({ user_ref: uid } as CuidadorInterface);
		} else if (data.role === 'idoso') {
			await createIdoso({
				user_ref: uid,
			} as IdosoInterface);
		}

		const result = (await createUserCallback({ uid, ...finalData })) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`User service error: ${error}`);
		}
		throw error;
	}
};

export const getUserById = async (userId: string) => {
	try {
		const result = (await getUserCallback({ userId: userId })) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`User service error: ${error}`);
		}
		throw error;
	}
};

export const listUsers = async (range: number) => {
	try {
		const result = (await listUsersCallback({ range: range })) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`User service error: ${error}`);
		}
		throw error;
	}
};

export const updateUser = async (uid: string, data: UserInterface) => {
	try {
		const finalPhotoURL: string | null = await formatAndUploadImage(data.photoURL, uid);

		const finalData = {
			email: data.email,
			name: data.name,
			photoURL: finalPhotoURL,
			role: data.role,
			birthday: data.birthday,
			phoneNumber: data.phoneNumber,
		};

		const result = (await updateUserCallback(finalData)) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`User service error: ${error}`);
		}
		throw error;
	}
};

export const deleteUser = async () => {
	try {
		const result = (await deleteUserCallback()) as CloudFunctionDataResponse;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`User service error: ${error}`);
		}
		throw error;
	}
};
