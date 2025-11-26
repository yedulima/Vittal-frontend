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
			paddingHorizontal: 16,
			paddingVertical: 12,
			margin: 3,
			gap: 15,
		},
		infos: {
			flex: 1,
			gap: 3,
		},
		count: {
			...fonts.h2,
			...fonts.bold,
		},
		name: {
			...fonts.accent,
			...fonts.medium,
		},
		IconContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
