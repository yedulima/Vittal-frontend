import { LightTheme } from '@/constants/Themes';
import { welcomeStyles } from '@/styles/screens/WelcomeStyles';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';

export default function LoginScreen() {
	const styles = welcomeStyles(LightTheme);
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('@/assets/images/background-login-image.png')}
				contentFit="cover"
				style={styles.image}
			/>

			<LinearGradient
				colors={['transparent', 'rgba(238,238,238, 0.5)', '#EEEEEE']}
				locations={[0.1, 0.5, 1]}
				style={styles.linearGradient}
			/>

			<View style={styles.header}>
				<Text style={styles.title}>Bem-vindo a Vittal</Text>
				<View>
					<Text style={styles.subTitle}>Fique mais perto de</Text>
					<Text style={[styles.subTitle, styles.greenSubTitle]}>Quem você ama</Text>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<Button
					text="Entrar"
					onPress={() => router.navigate('/login')}
					style={styles.button}
					textStyle={styles.buttonText}
				/>
				<Button
					text="Criar conta"
					onPress={() => router.navigate('/register')}
					style={[styles.button, styles.registerButton]}
					textStyle={[styles.buttonText, styles.registerButtonText]}
				/>
			</View>
		</SafeAreaView>
	);
}
