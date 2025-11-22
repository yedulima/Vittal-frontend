import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const backArrowStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			alignSelf: 'flex-start',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: 10,
			gap: 5,
		},
		text: {
			...fonts.accent,
			...fonts.regular,
			color: colors.textColor,
		},
		icon: {
			color: colors.textColor,
		},
	});
};
