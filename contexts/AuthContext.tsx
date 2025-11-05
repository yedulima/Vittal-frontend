import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface AuthContextInterface {
	isLoggedIn: boolean;
	user: object | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<object>;
	logout: () => Promise<void>;
	register: (email: string, password: string, username: string, profileUrl: string) => Promise<object>;
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
	const [user, setUser] = useState<object | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const login = async (email: string, password: string) => {
		setLoading(true);
		try {
			const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

			setUser(response?.user);
			setIsLoggedIn(true);

			return response?.user;
		} catch (error: any) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const register = async (email: string, password: string, username: string, profileUrl: string) => {
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
			console.log(`Response: ${response.user}`);

			setUser(response?.user);
			setIsLoggedIn(true);

			await setDoc(doc(FIRESTORE_DB, 'users', response?.user?.uid), {
				username,
				profileUrl,
				email,
			});

			return response?.user;
		} catch (error: any) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		setLoading(true);
		try {
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

	return <AuthContext.Provider value={parseData}>{children}</AuthContext.Provider>;
}
