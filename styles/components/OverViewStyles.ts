import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const overViewStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.cardColor,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			borderRadius: 10,
			padding: 18,
			margin: 3,
			gap: 9,
		},
		infos: {
			flex: 1,
		},
		count: {
			...fonts.h3,
		},
		name: {
			...fonts.caption,
			...fonts.medium,
			color: colors.textColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
