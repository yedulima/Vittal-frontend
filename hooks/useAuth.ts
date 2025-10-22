import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { getUserData } from '@/utils/getUserData';
import { useFocusEffect, useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';

export function useAuthRedirect() {
	const router = useRouter();

	useFocusEffect(() => {
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
			if (user) {
				const userId = user.uid;
				const userData = await getUserData(userId!);
				const userType = userData?.userType;

				router.dismissAll();

				if (userType === 'cuidadores') {
					router.replace('/(cuidador)');
				} else {
					router.replace('/(idoso)');
				}
			}
		});

		return unsubscribe;
	});
}
