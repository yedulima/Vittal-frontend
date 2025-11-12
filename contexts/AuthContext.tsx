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
	register: (email: string, password: string, username: string, birthday: string, role: string) => Promise<object>;
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
	const [initialized, setInitialized] = useState<boolean>(false);

	useEffect(() => {
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
			setLoading(true);
			const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);

			setUser(response?.user);
			setIsLoggedIn(true);

			return response?.user;
		} catch (error: any) {
			setLoading(false);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const register = async (email: string, password: string, username: string, birthday: string, role: string) => {
		try {
			setLoading(true);
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
			console.log(`Response: ${response.user}`);

			console.log(email, password, username, birthday);

			await setDoc(doc(FIRESTORE_DB, 'users', response?.user?.uid), {
				email,
				username,
				birthday,
			});

			await login(email, password);

			return response?.user;
		} catch (error: any) {
			setLoading(false);
			throw error;
		} finally {
			setLoading(false);
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
