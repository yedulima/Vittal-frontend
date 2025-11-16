import { createUser } from '@/api/services/user.service';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface AuthContextInterface {
	isLoggedIn: boolean;
	user: User | null;
	role: string | null;
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
	const [role, setRole] = useState<string | null>(null);
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

					const userTokenResult = await user.getIdTokenResult();

					if (!!userTokenResult.claims.role) {
						setRole(userTokenResult.claims.role as string);
					} else {
						await logout();
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
			const user = response.user;

			const userTokenResult = await user.getIdTokenResult();

			if (!!userTokenResult.claims.role) {
				setRole(userTokenResult.claims.role as string);
			} else {
				await logout();
			}

			setUser(response?.user);
			setIsLoggedIn(true);
			setLoading(false);

			return response?.user;
		} catch (error: any) {
			throw error;
		}
	};

	const register = async (data: RegisterSchema) => {
		try {
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, data.email, data.password);
			const user = response.user;

			await logout();

			await createUser(user.uid, data);

			setLoading(true);

			await login(data.email, data.password);

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
