import { Normal } from '@/constants/FontText';
import { LightTheme } from '@/constants/Themes';
import { googleButtonStyles } from '@/styles/components/GoogleButtonStyles';
import { Image } from 'expo-image';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

const GoogleIcon = require('@/assets/images/google-icon.png');

interface GoogleButtonProps {
	text: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

export default function GoogleButton({ text, onPress, style }: GoogleButtonProps) {
	const styles = googleButtonStyles(LightTheme, Normal);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, style]}>
			<Image source={GoogleIcon} style={styles.googleIcon} />
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
