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
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

const PlaceholderImage = require('@/assets/images/placeholder-image.png');

export default function ConfigurationsScreen() {
	const { isDark, toggleTheme } = useContext(ThemeContext);
	const [isTextSizeModalVisible, setTextSizeModalVisible] = useState<boolean>(false);
	const [textSize, setTextSize] = useState<string>('Small');
	const border = useThemeColor('border');

	return (
		<ThemedView style={styles.container}>
			<View style={styles.profileContainer}>
				<ProfilePhoto imgSource={PlaceholderImage} style={[{ borderColor: border }, styles.profilePhoto]} />
				<View style={styles.profileTextContainer}>
					<ThemedText text="Username" type="defaultSemiBold" style={styles.userName} />
					<ThemedText text="user@example.com" type="light" />
				</View>
			</View>
			<OptionsSection title="Apparence">
				<ButtonSwitch text="Dark theme" value={isDark} onPress={() => toggleTheme(isDark ? 'light' : 'dark')} />
			</OptionsSection>
			<OptionsSection title="Accessibility">
				<ThemedButton
					text="Text size"
					secondaryText={textSize}
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
				<CheckBox title="Small" onChange={() => setTextSize('Small')} value={textSize === 'Small'} />
				<CheckBox title="Medium" onChange={() => setTextSize('Medium')} value={textSize === 'Medium'} />
				<CheckBox title="Large" onChange={() => setTextSize('Large')} value={textSize === 'Large'} />
			</TextSizeModal>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 28,
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
