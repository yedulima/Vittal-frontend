import { useThemeColor } from '@/hooks/useThemeColor';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import ReturnButton from '@/components/ReturnButton';
import ThemedButton from '@/components/ThemedButton';
import ThemedInput from '@/components/ThemedInput';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

const USER_CONFIG = {
	idoso: {
		title: 'Cadastro do Idoso',
		registerHandler: (data: any) => {
			console.log('Dados do IDOSO:', data);
			Alert.alert('Cadastro de Idoso', 'Simulando envio de dados...');
		},
	},
	cuidador: {
		title: 'Cadastro do Cuidador',
		registerHandler: (data: any) => {
			console.log('Dados do CUIDADOR:', data);
			Alert.alert('Cadastro de Cuidador', 'Simulando envio de dados...');
		},
	},
};

export default function RegisterScreen() {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [birthDay, setBirthDay] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');

	const { button2 } = useThemeColor();

	const params = useLocalSearchParams();
	const userType = params.userType as 'idoso' | 'cuidador';
	const router = useRouter();

	const config = USER_CONFIG[userType];

	const handleRegister = () => {
		const formData = { name, email, password, confirmPassword, birthDay, phoneNumber };
		config.registerHandler(formData);
	};

	if (!config) {
		return (
			<ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ThemedText text="Tipo de usuário inválido!" />
			</ThemedView>
		);
	}

	return (
		<ThemedSafeAreaView style={styles.container}>
			<ReturnButton />
			<View style={styles.headerContainer}>
				<ThemedText text={config.title} type="title" />
				<ThemedText text="Preencha seus dados para continuar" type="default" />
			</View>
			<View style={styles.credentials}>
				<View>
					<ThemedText text="Nome completo" style={styles.inputLabel} />
					<ThemedInput value={name} type="default" onChange={(e: any) => setName(e)} />
				</View>
				<View>
					<ThemedText text="E-mail" style={styles.inputLabel} />
					<ThemedInput value={email} type="email-address" onChange={(e: any) => setEmail(e)} />
				</View>
				<View>
					<ThemedText text="Senha" style={styles.inputLabel} />
					<ThemedInput
						value={password}
						type="default"
						onChange={(e: any) => setPassword(e)}
						secureTextEntry={true}
					/>
				</View>
				<View>
					<ThemedText text="Confirme sua Senha" style={styles.inputLabel} />
					<ThemedInput
						value={confirmPassword}
						type="default"
						onChange={(e: any) => setConfirmPassword(e)}
						secureTextEntry={true}
					/>
				</View>
				<View>
					<ThemedText text="Data de nascimento" style={styles.inputLabel} />
					<ThemedInput
						value={birthDay}
						type="default"
						onChange={(e: any) => setBirthDay(e)}
						secureTextEntry={true}
					/>
				</View>
				<View>
					<ThemedText text="Telefone" style={styles.inputLabel} />
					<ThemedInput
						value={phoneNumber}
						type="phone-pad"
						onChange={(e: any) => setPhoneNumber(e)}
						secureTextEntry={true}
					/>
				</View>
			</View>
			<ThemedButton
				text="Cadastrar-se"
				onPress={handleRegister}
				textType="defaultSemiBold"
				style={{ backgroundColor: button2 }}
			/>
			<View style={styles.footer}>
				<ThemedText text="Já possui uma conta?" type="default" />
				<ThemedText text="Entre agora!" type="defaultSemiBold" onPress={() => router.navigate('/login')} />
			</View>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 15,
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
		marginTop: 20,
	},
});
