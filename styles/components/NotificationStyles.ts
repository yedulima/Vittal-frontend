import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
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
		figureContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			width: 50,
			height: 50,
		},
		figure: {
			color: colors.iconColor,
		},
		notificationInfos: {
			justifyContent: 'center',
			flex: 1,
		},
		title: {
			...fonts.accent,
			...fonts.medium,
			color: colors.textColor,
			width: '95%',
		},
		description: {
			...fonts.caption,
			...fonts.light,
			width: '95%',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
