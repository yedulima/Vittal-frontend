import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ReturnButton from '@/components/ReturnButton';
import ThemedButton from '@/components/ThemedButton';
import ThemedInput from '@/components/ThemedInput';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function LoginScreen() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { button2 } = useThemeColor();

	const router = useRouter();

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
						<ThemedInput value={email} type="email-address" onChange={(e: any) => setEmail(e)} />
					</View>
					<View>
						<ThemedText text="Senha" style={styles.inputLabel} />
						<ThemedInput
							value={password}
							type="email-address"
							onChange={(e: any) => setPassword(e)}
							secureTextEntry={true}
						/>
					</View>
					<ThemedText text="Esqueci minha senha" type="default" style={styles.forgotPassowrd} />
				</View>
				<ThemedButton
					text="Entrar"
					onPress={() => {}}
					textType="defaultSemiBold"
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
