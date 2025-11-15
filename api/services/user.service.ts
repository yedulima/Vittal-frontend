import { UserInterface } from '@/api/interfaces';
import { FIREBASE_FUNCTIONS } from '@/FirebaseConfig';
import { formatAndUploadImage } from '@/utils/formatAndUploadImage';
import { httpsCallable } from 'firebase/functions';

const createUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-createUser');
const getUserCallback = httpsCallable(FIREBASE_FUNCTIONS, 'userFunctions-getUserById');

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

		const result = await createUserCallback({ uid, ...finalData });
		return result;
	} catch (error: any) {
		console.error(error);
	}
};

export const getUserById = async (id: string) => {
	try {
		const result = (await getUserCallback(id)).data;
		return result;
	} catch (error: any) {
		console.error(error);
	}
};
