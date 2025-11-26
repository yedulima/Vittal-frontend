import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 50;

	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			padding: 15,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
		},
		info: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
		photo: {
			width: photoSize,
			height: photoSize,
			borderRadius: 25,
			backgroundColor: colors.imageBackgroundColor,
			borderWidth: 2,
			borderColor: colors.cardBorderColor,
		},
		userCredentials: {
			flex: 1,
			justifyContent: 'center',
		},
		name: {
			...fonts.accent,
			color: colors.textColor,
			width: '95%',
		},
		status: {
			...fonts.small,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
