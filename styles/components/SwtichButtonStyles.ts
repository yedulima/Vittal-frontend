import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const switchButtonStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			paddingVertical: 15,
			paddingHorizontal: 15,
			width: '100%',
			margin: 2,
			borderRadius: 5,
			backgroundColor: colors.cardColor,
		},
		text: {
			flex: 1,
			fontSize: 16,
			color: colors.buttonTextColor,
			fontFamily: 'Rubik_400Regular',
		},
	});
};
