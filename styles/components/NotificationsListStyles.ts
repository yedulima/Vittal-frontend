import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationsListStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
		},
		noDataContainer: {
			flex: 1,
			alignItems: 'center',
			paddingTop: 15,
		},
		text: {
			...fonts.accent,
		},
		medsContainer: {
			padding: 20,
			backgroundColor: colors.cardColor,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
			borderRadius: 15,
		},
		noMedsContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			padding: 15,
			gap: 10,
		},
		noMedsText: {
			...fonts.accent,
			textAlign: 'center',
		},
		icon: {
			color: colors.iconColor,
		},
		separator: {
			width: '100%',
			margin: 6,
		},
	});
};
