import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const fetchUserData = async () => {
	try {
		const currentUser = FIREBASE_AUTH.currentUser;
		const userId: any = currentUser?.uid;

		const userDocRef = doc(FIRESTORE_DB, 'users', userId);
		const docSnap = await getDoc(userDocRef);

		if (!docSnap.exists()) {
			console.error('User not found.');
			return null;
		}

		return docSnap.data();
	} catch (error: any) {
		throw error;
	}
};
