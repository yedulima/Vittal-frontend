import { createUser } from '@/api/services/user.service';
import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	User,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface AuthContextInterface {
	isLoggedIn: boolean;
	user: User | null;
	role: 'cuidador' | 'idoso' | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<User>;
	logout: () => Promise<void>;
	register: (data: RegisterSchema) => Promise<User>;
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
	const [role, setRole] = useState<'cuidador' | 'idoso' | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [initialized, setInitialized] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
			try {
				if (user) {
					setUser(user);
					setIsLoggedIn(true);

					const userDocRef = doc(FIRESTORE_DB, 'users', user.uid);
					const userDocSnap = await getDoc(userDocRef);

					if (userDocSnap.exists()) {
						const firestoreData = userDocSnap.data();
						setRole(firestoreData.role as 'cuidador' | 'idoso' | null);
					}
				} else {
					setUser(null);
					setIsLoggedIn(false);
					setRole(null);
				}
			} catch (error: any) {
				console.error(error);

				setUser(null);
				setIsLoggedIn(false);
				setRole(null);
			} finally {
				setLoading(false);
				setInitialized(true);
			}
		});

		return unsubscribe;
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
			const userCrendtial = response.user;

			if (userCrendtial && !userCrendtial.emailVerified) {
				await FIREBASE_AUTH.signOut();
				throw {
					code: 'auth/email-not-verified',
					message: 'Email not verified. Please check your inbox and try again.',
				};
			}

			if (userCrendtial) {
				const userDocRef = doc(FIRESTORE_DB, 'users', userCrendtial.uid);
				const userDocSnap = await getDoc(userDocRef);

				if (userDocSnap.exists()) {
					const firestoreData = userDocSnap.data();
					setRole(firestoreData.role as 'cuidador' | 'idoso' | null);
				}
			}

			setUser(response?.user);
			setIsLoggedIn(true);

			return response?.user;
		} catch (error: any) {
			throw error;
		}
	};

	const register = async (data: RegisterSchema) => {
		try {
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, data.email, data.password);
			const userCrendtial = response.user;

			await createUser(userCrendtial.uid, data);
			
			await sendEmailVerification(userCrendtial);

			await FIREBASE_AUTH.signOut();

			setUser(null);
			setIsLoggedIn(false);

			return response?.user;
		} catch (error: any) {
			throw error;
		}
	};

	const logout = async () => {
		try {
			setLoading(true);
			await FIREBASE_AUTH.signOut();

			setUser(null);
			setIsLoggedIn(false);
			setRole(null);
		} catch (error: any) {
			console.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const parseData = {
		user,
		role,
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
