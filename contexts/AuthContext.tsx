import { UserData } from '@/api/interfaces';
import { createUser, getUserById } from '@/api/services/user.service';
import { useThemeContext } from '@/contexts/ThemeContext';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface AuthContextInterface {
	isLoggedIn: boolean;
	user: User | null;
	userData: UserData | null;
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
	const [userData, setUserData] = useState<UserData | null>(null);
	const [role, setRole] = useState<string | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [initialized, setInitialized] = useState<boolean>(false);

	const { setTheme } = useThemeContext();

	const setUserFunc = async (user: User) => {
		setUser(user);
		setIsLoggedIn(true);

		const userTokenResult = await user.getIdTokenResult();

		if (!!userTokenResult.claims.role) {
			setRole(userTokenResult.claims.role as string);
		} else {
			await logout();
		}

		const result = await getUserById(user.uid);
		setUserData(result?.data.data);
	};

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
			try {
				if (user) {
					await setUserFunc(user);
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

			await setUserFunc(user);
			setLoading(false);

			return response?.user;
		} catch (error: any) {
			setLoading(false);
			throw error;
		}
	};

	const register = async (data: RegisterSchema) => {
		try {
			const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, data.email, data.password);
			const user = response.user;

			await logout();

			setLoading(true);

			await createUser(user.uid, data);

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

			await setTheme!('light');

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
		userData,
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
