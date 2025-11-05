import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const backArrowStyles = (colors: ThemeColors) => {
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
			fontWeight: 500,
			color: colors.accentColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
