import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userCardStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			paddingHorizontal: 17,
			height: 125,
			margin: 2,
			borderRadius: 10,
			backgroundColor: colors.cardColor,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
			alignItems: 'flex-start',
			justifyContent: 'center',
			gap: 4,
		},
		title: {
			...fonts.body,
			...fonts.medium,
		},
		description: {
			...fonts.caption,
			color: colors.textColor,
		},
	});
};
