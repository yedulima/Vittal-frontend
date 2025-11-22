import { LightTheme } from '@/constants/Themes';
import { useAuthContext } from '@/contexts/AuthContext';
import { loginStyles } from '@/styles/screens/LoginStyles';
import { AUTH_ERROR_MESSAGES, getFormErrorFromFirebaseError } from '@/utils/firebaseErrorMapper';
import { Link } from 'expo-router';
import { UseFormReturn } from 'react-hook-form';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import GoogleButton from '@/components/GoogleButton';
import LoginForm from '@/forms/Login/LoginForm';
import { LoginSchema } from '@/forms/Login/LoginSchema';

export default function LoginScreen() {
	const { login } = useAuthContext();
	const styles = loginStyles(LightTheme);

	const handleLogin = async (data: LoginSchema, formMethods: UseFormReturn<LoginSchema>) => {
		try {
			await login(data.email, data.password);
		} catch (error: any) {
			const errorCode = error.code;

			const formError = getFormErrorFromFirebaseError(errorCode);

			if (formError.message === AUTH_ERROR_MESSAGES.EMAIL_NOT_VERIFIED) {
				formMethods.setError('email', formError);
				return;
			}

			if (formError.message === AUTH_ERROR_MESSAGES.GENERIC_ERROR) {
				console.error(`Login error: ${errorCode}`);
				alert(formError.message);
			}

			formMethods.setError('email', formError);
			formMethods.setError('password', formError);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<BackArrow />

			<LoginForm onSubmit={handleLogin} />

			<View style={styles.orContainer}>
				<View style={styles.separationLine} />
				<Text style={styles.orText}>Ou</Text>
				<View style={styles.separationLine} />
			</View>

			<GoogleButton text="Entrar com Google" onPress={() => {}} style={styles.googleButton} />

			<Link href={'/register'} style={styles.noAccountText}>
				Não tem uma conta? Faça já seu <Text style={styles.registerDecoration}>cadastro!</Text>
			</Link>
		</SafeAreaView>
	);
}
