import { ThemeColors } from '@/constants/Themes';
import { useThemeContext } from '@/contexts/ThemeContext';
import { googleButtonStyles } from '@/styles/components/GoogleButtonStyles';
import { Image } from 'expo-image';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

const GoogleIcon = require('@/assets/images/google-icon.png');

interface GoogleButtonProps {
	text: string;
	onPress: () => void;
	styleColors?: ThemeColors;
	style?: StyleProp<ViewStyle>;
}

export default function GoogleButton({ text, onPress, styleColors, style }: GoogleButtonProps) {
	const { colors } = useThemeContext();
	const styles = googleButtonStyles(styleColors ? styleColors : colors);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, style]}>
			<Image source={GoogleIcon} style={styles.googleIcon} />
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
