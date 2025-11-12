import { LightTheme } from '@/constants/Themes';
import { useAuthContext } from '@/contexts/AuthContext';
import { loginStyles } from '@/styles/screens/LoginStyles';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import GoogleButton from '@/components/GoogleButton';
import LoginForm from '@/forms/Login/LoginForm';
import { LoginSchema } from '@/forms/Login/LoginSchema';

export default function LoginScreen() {
	const { login } = useAuthContext();
	const styles = loginStyles(LightTheme);

	const handleLogin = async (data: LoginSchema) => {
		try {
			await login!(data.email, data.password);
		} catch (error: any) {
			const errorCode = error.code;
			alert(errorCode);
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

			<GoogleButton
				text="Entrar com Google"
				onPress={() => console.log('a')}
				styleColors={LightTheme}
				style={styles.googleButton}
			/>

			<Link href={'/register'} style={styles.noAccountText}>
				Não tem uma conta? Faça já seu <Text style={styles.registerDecoration}>cadastro!</Text>
			</Link>
		</SafeAreaView>
	);
}
