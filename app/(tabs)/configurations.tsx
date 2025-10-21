import { ThemeContext } from '@/contexts/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
	const [isTextSizeModalVisible, setTextSizeModalVisible] = useState<boolean>(false);
	const [textSize, setTextSize] = useState<string>('Pequena');
	const { border } = useThemeColor();

	return (
		<ThemedSafeAreaView>
			<ThemedText text="Configurações" type="title" style={styles.title} />
			<View style={styles.profileContainer}>
				<ProfilePhoto imgSource={PlaceholderImage} style={[{ borderColor: border }, styles.profilePhoto]} />
				<View style={styles.profileTextContainer}>
					<ThemedText text="Username" type="defaultSemiBold" style={styles.userName} />
					<ThemedText text="user@example.com" type="light" />
				</View>
			</View>
			<OptionsSection title="Aparência">
				<ButtonSwitch text="Tema escuro" value={isDark} onPress={() => toggleTheme(isDark ? 'light' : 'dark')} />
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
				onPress={() => {}}
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
