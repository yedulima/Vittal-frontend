import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const searchBarStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			padding: 12,
			backgroundColor: colors.cardColor,
			borderRadius: 10,
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
