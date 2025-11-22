import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const googleButtonStyles = (colors: ThemeColors, size: FontSize) => {
	const iconSize = 20;

	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			padding: 15,
			margin: 2,
			borderRadius: 5,
			backgroundColor: colors.cardColor,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 8,
		},
		text: {
			...fonts.accent,
			...fonts.medium,
			color: colors.textColor,
		},
		googleIcon: {
			width: iconSize,
			height: iconSize,
		},
	});
};
