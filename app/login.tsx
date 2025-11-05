import { LightTheme } from '@/constants/Themes';
import { useAuthContext } from '@/contexts/AuthContext';
import { loginStyles } from '@/styles/screens/LoginStyles';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import GoogleButton from '@/components/GoogleButton';
import Input from '@/components/Input';

export default function LoginScreen() {
	const { login } = useAuthContext();
	const styles = loginStyles(LightTheme);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleLogin = async () => {
		try {
			await login!(email, password);
		} catch (error: any) {
			const errorCode = error.code;
			alert(errorCode);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<BackArrow />
			<Text style={styles.text}>Bem vindo de volta</Text>
			<View style={styles.inputsContainer}>
				<Input
					title="Email"
					placeHolder="Insira seu e-mail"
					onChange={(t: string) => setEmail(t)}
					value={email}
					styleColors={LightTheme}
				/>
				<Input
					title="Senha"
					placeHolder="Insira sua senha"
					onChange={(t: string) => setPassword(t)}
					value={password}
					styleColors={LightTheme}
					isPassword
				/>
			</View>
			<Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
			<Button text="Entrar" onPress={handleLogin} style={styles.button} textStyle={styles.buttonText} />
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
			<Link href={'/choose_user'} style={styles.noAccountText}>
				Não tem uma conta? Faça já seu <Text style={styles.registerDecoration}>cadastro!</Text>
			</Link>
		</SafeAreaView>
	);
}
