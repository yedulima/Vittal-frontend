import { ThemeContext } from '@/contexts/ThemeContext';
import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { useThemeColor } from '@/hooks/useThemeColor';
import { getUserData } from '@/utils/getUserData';
import { useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import ButtonSwitch from '@/components/ButtonSwitch';
import CheckBox from '@/components/CheckBox';
import OptionsSection from '@/components/OptionsSection';
import ProfilePhoto from '@/components/ProfilePhoto';
import TextSizeModal from '@/components/TextSizeModal';
import ThemedButton from '@/components/ThemedButton';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

const PlaceholderImage = require('@/assets/images/placeholder-image.png');

export default function ConfigurationsScreen() {
	const { isDark, toggleTheme } = useContext(ThemeContext);
	const [name, setName] = useState<string>('Username');
	const [email, setEmail] = useState<string>('user@example.com');
	const [loading, setLoading] = useState<boolean>(false);
	const [isTextSizeModalVisible, setTextSizeModalVisible] = useState<boolean>(false);
	const [textSize, setTextSize] = useState<string>('Pequena');

	const { border, primaryText } = useThemeColor();

	const router = useRouter();

	useEffect(() => {
		const getNameAndEmail = async () => {
			setLoading(true);
			try {
				const currentUser = FIREBASE_AUTH.currentUser;
				const userId = currentUser?.uid;
				const userData = await getUserData(userId);

				if (!userData) {
					return null;
				}

				setName(userData!.name);
				setEmail(userData!.email);
			} catch (error: any) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getNameAndEmail();
	}, []);

	const handleLogout = () => {
		FIREBASE_AUTH.signOut();
		router.replace('/(auth)');
	};

	return (
		<ThemedSafeAreaView>
			<ThemedText text="Configurações" type="title" style={styles.title} />
			<View style={styles.profileContainer}>
				<ProfilePhoto imgSource={PlaceholderImage} style={[{ borderColor: border }, styles.profilePhoto]} />
				<View style={styles.profileTextContainer}>
					{loading ? (
						<ActivityIndicator color={primaryText} size={30} />
					) : (
						<>
							<ThemedText text={name} type="defaultSemiBold" style={styles.userName} />
							<ThemedText text={email} type="light" />
						</>
					)}
				</View>
			</View>
			<OptionsSection title="Aparência">
				<ButtonSwitch
					text="Tema escuro"
					value={isDark}
					onPress={() => toggleTheme(isDark ? 'light' : 'dark')}
				/>
			</OptionsSection>
			<OptionsSection title="Acessibilidade">
				<ThemedButton
					text="Text"
					subTitle={textSize}
					onPress={() => setTextSizeModalVisible(true)}
					rightIconName="arrow-forward"
				/>
			</OptionsSection>
			<ThemedButton
				text="Encerrar sessão"
				onPress={handleLogout}
				leftIconName="exit-outline"
				style={styles.logoutButton}
				textType="defaultSemiBold"
			/>
			<TextSizeModal isVisible={isTextSizeModalVisible} onClose={() => setTextSizeModalVisible(false)}>
				<CheckBox title="Pequena" onChange={() => setTextSize('Pequena')} value={textSize === 'Pequena'} />
				<CheckBox title="Mediana" onChange={() => setTextSize('Mediana')} value={textSize === 'Mediana'} />
				<CheckBox title="Grande" onChange={() => setTextSize('Grande')} value={textSize === 'Grande'} />
			</TextSizeModal>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		alignSelf: 'flex-start',
		paddingBottom: 30,
	},
	profileContainer: {
		alignItems: 'center',
		width: '100%',
		gap: 15,
		marginBottom: 20,
	},
	profilePhoto: {
		width: 140,
		height: 140,
		borderWidth: 3,
	},
	profileTextContainer: {
		alignItems: 'center',
	},
	userName: {
		fontSize: 20,
	},
	logoutButton: {
		backgroundColor: '#fa5959ff',
	},
});
