import { useThemeColor } from '@/hooks/useThemeColor';
import { loginWithEmailAndPassword } from '@/services/auth';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import ReturnButton from '@/components/ReturnButton';
import ThemedButton from '@/components/ThemedButton';
import ThemedInput from '@/components/ThemedInput';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function LoginScreen() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const { button2 } = useThemeColor();

	const router = useRouter();

	const handleLogin = async () => {
		setLoading(true);

		try {
			if (!email || !password) {
				return Alert.alert('Preencha todos os campos');
			}

			await loginWithEmailAndPassword(email, password);
			router.replace('/(tabs)');
		} catch (error: any) {
			const errorCode = error.code;

			switch (errorCode) {
				case 'auth/invalid-email':
					console.error('E-mail inválido!');
					Alert.alert('E-mail inválido!');
					break;
				case 'auth/invalid-credential':
					console.error('Credênciais inválidas!');
					Alert.alert('Credênciais inválidas!');
					break;
				case 'auth/wrong-password':
					console.error('E-mail ou senha incorretos!');
					Alert.alert('E-mail ou senha incorretos!');
					break;
				case 'auth/user-not-found':
					console.error('Usuário não encontrado!');
					Alert.alert('Usuário não encontrado!');
					break;
				case 'auth/too-many-requests':
					console.warn('Muitas requisições feitas.');
					Alert.alert('Muitas requisições feitas.', 'Tente novamente mais tarde.');
					break;
				case 'firestore/unavailable':
					console.warn('Serviço indisponível.');
					Alert.alert('Serviço indisponível.');
					break;
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<ThemedSafeAreaView style={styles.container}>
			<ReturnButton />
			<View style={styles.content}>
				<View style={styles.headerContainer}>
					<ThemedText text="Bem vindo de volta!" type="title" />
					<ThemedText text="Preencha os campos para continuar o login" type="default" />
				</View>
				<View style={styles.credentials}>
					<View>
						<ThemedText text="E-mail" style={styles.inputLabel} />
						<ThemedInput value={email} inputType="email-address" onChange={(e: any) => setEmail(e)} />
					</View>
					<View>
						<ThemedText text="Senha" style={styles.inputLabel} />
						<ThemedInput
							value={password}
							inputType="email-address"
							onChange={(e: any) => setPassword(e)}
							type='password'
						/>
					</View>
					<ThemedText text="Esqueci minha senha" type="default" style={styles.forgotPassowrd} />
				</View>
				<ThemedButton
					text="Entrar"
					onPress={handleLogin}
					textType="defaultSemiBold"
					loading={loading}
					style={{ backgroundColor: button2 }}
				/>
			</View>
			<View style={styles.footer}>
				<ThemedText text="Não possui uma conta?" type="default" />
				<ThemedText text="Crie uma!" type="defaultSemiBold" onPress={() => router.navigate('/register')} />
			</View>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	content: {
		width: '100%',
		height: '90%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
	},
	credentials: {
		width: '100%',
		gap: 15,
		marginBottom: 20,
	},
	inputLabel: {
		fontSize: 16,
		fontWeight: 500,
		marginBottom: 8,
	},
	forgotPassowrd: {
		alignSelf: 'flex-start',
		textDecorationLine: 'underline',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		paddingBottom: 20,
	},
});
