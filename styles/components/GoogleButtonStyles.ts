import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const googleButtonStyles = (colors: ThemeColors) => {
	const iconSize = 20;

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
            fontSize: 15,
			fontWeight: 600,
			color: colors.textColor,
		},
		googleIcon: {
			width: iconSize,
			height: iconSize,
		},
	});
};
