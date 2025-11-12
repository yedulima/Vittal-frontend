import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

export const checkEmailExists = async (email: string): Promise<boolean> => {
	const methods = await fetchSignInMethodsForEmail(FIREBASE_AUTH, email);

	console.log('Dau:', methods);

	return methods.length > 0;
};
