import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const overViewStyles = (colors: ThemeColors) => {
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
			fontSize: 20,
			color: colors.textColor,
			fontFamily: 'Rubik_700Bold',
		},
		name: {
			fontSize: 14,
			color: colors.textColor,
			fontFamily: 'Rubik_500Medium',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
