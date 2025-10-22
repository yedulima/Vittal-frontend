import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { useFocusEffect, useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuthRedirect() {
	const router = useRouter();

	useFocusEffect(() => {
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
			if (user) {
				router.dismissAll();
				router.replace('/(tabs)');
			}
		});

		return unsubscribe;
	});
}
