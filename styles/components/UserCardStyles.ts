import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userCardStyles = (colors: ThemeColors) => {
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
			fontSize: 18,
			fontWeight: 600,
			color: colors.textColor,
		},
		description: {
			fontSize: 14,
			color: colors.textColor,
		},
	});
};
