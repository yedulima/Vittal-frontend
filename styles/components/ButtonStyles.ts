import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const buttonStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			paddingVertical: 15,
			paddingHorizontal: 15,
			margin: 2,
			borderRadius: 15,
			backgroundColor: colors.buttonColor,
			alignItems: 'center',
			justifyContent: 'center',
			gap: 7,
		},
		textContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 8,
			flex: 1,
		},
		text: {
			...fonts.accent,
			color: colors.buttonTextColor,
		},
		caption: {
			...fonts.accent,
		},
	});
};
