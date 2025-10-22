import { ThemeContext } from '@/contexts/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import ThemedButton from '@/components/ThemedButton';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

const logo = require('@/assets/images/logo-icon.png');
const logoWhite = require('@/assets/images/logo-icon-white.png');

export default function HomeScreen() {
	const { isDark } = useContext(ThemeContext);
	const { button2 } = useThemeColor();
	const router = useRouter();

	return (
		<ThemedSafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Image source={isDark ? logoWhite : logo} contentFit="contain" style={styles.logo} />
				<ThemedText text="Bem vindo ao Vittal!" type="title" />
				<ThemedText text="Cuide de quem você mais ama" type="default" />
			</View>
			<View style={styles.buttons}>
				<ThemedButton
					text="Login"
					onPress={() => router.navigate('/login')}
					textType="defaultSemiBold"
					style={{ backgroundColor: button2 }}
				/>
				<ThemedButton
					text="Cadastrar-se"
					onPress={() => router.navigate('/register')}
					textType="defaultSemiBold"
					type="outlined"
					style={{ backgroundColor: 'transparent', borderWidth: 2 }}
				/>
			</View>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	logo: {
		width: 90,
		height: 90,
		marginBottom: 20,
	},
	buttons: {
		width: '100%',
		gap: 10,
	},
});
