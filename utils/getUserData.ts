import { FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getUserData = async (userId: any) => {
	try {
		const userDocRef = doc(FIRESTORE_DB, 'users', userId);
		const docSnap = await getDoc(userDocRef);

		if (!docSnap.exists()) {
			console.warn('User not found.');
			return null;
		}

		return docSnap.data();
	} catch (error: any) {
		throw error;
	}
};
