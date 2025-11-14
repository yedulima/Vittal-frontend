import { FIREBASE_AUTH, FIREBASE_STORAGE, FIRESTORE_DB } from '@/FirebaseConfig';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	updateProfile,
	User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface AuthContextInterface {
	isLoggedIn: boolean;
	user: User | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<object>;
	logout: () => Promise<void>;
	register: (
		email: string,
		password: string,
		name: string,
		birthday: string,
		role: string,
		imageUri?: string
	) => Promise<object>;
}

export const AuthContext = createContext<Partial<AuthContextInterface>>({});

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('Fail in load auth context.');
	}
	return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [initialized, setInitialized] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
			setUser(user);
			setIsLoggedIn(!!user);
			setLoading(false);
			setInitialized(true);
		});

		return unsubscribe;
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
			const userCrendtial = response.user;

			if (userCrendtial && !userCrendtial.emailVerified) {
				setUser(null);
				setIsLoggedIn(false);

				await FIREBASE_AUTH.signOut();

				throw {
					code: 'auth/email-not-verified',
					message: 'Email not verified. Please check your inbox and try again.',
				};
			}

			setUser(response?.user);
			setIsLoggedIn(true);

			return response?.user;
		} catch (error: any) {
			throw error;
		}
	};

	const register = async (
		email: string,
		password: string,
		name: string,
		birthday: string,
		role: string,
		imageUri?: string
	) => {
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
			const userCrendtial = response.user;
			let photoURL = null;

			if (imageUri && userCrendtial) {
				const responseBlob = await fetch(imageUri);
				const blob = await responseBlob.blob();

				const storageRef = ref(FIREBASE_STORAGE, `profile_photos/${userCrendtial.uid}.jpg`);

				await uploadBytes(storageRef, blob);

				const downloadUrl = await getDownloadURL(storageRef);
				photoURL = downloadUrl;

				await updateProfile(userCrendtial, {
					photoURL: downloadUrl,
				});
			}

			if (userCrendtial) {
				await updateProfile(userCrendtial, {
					displayName: name,
				});
			}

			sendEmailVerification(userCrendtial);

			await setDoc(doc(FIRESTORE_DB, 'users', response?.user?.uid), {
				createdAt: new Date(),
				email,
				name,
				birthday,
				role,
				photoURL,
			});

			await FIREBASE_AUTH.signOut();

			setUser(null);
			setIsLoggedIn(false);
			setLoading(false);

			return response?.user;
		} catch (error: any) {
			setLoading(false);
			throw error;
		}
	};

	const logout = async () => {
		try {
			setLoading(true);
			await FIREBASE_AUTH.signOut();

			setUser(null);
			setIsLoggedIn(false);
		} catch (error: any) {
			console.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const parseData = {
		user,
		isLoggedIn,
		login,
		register,
		logout,
		loading,
	};

	if (!initialized) {
		return null;
	}

	return <AuthContext.Provider value={parseData}>{children}</AuthContext.Provider>;
}
