import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const searchBarStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	const platform = Platform.OS === 'android';
	const padding = platform ? 3 : 14;

	return StyleSheet.create({
		container: {
			padding: padding,
			paddingHorizontal: padding + 2,
			paddingLeft: 14,
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			marginBottom: 15,
		},
		textInput: {
			...fonts.accent,
			color: colors.textColor,
			outlineWidth: 0,
		},
	});
};
