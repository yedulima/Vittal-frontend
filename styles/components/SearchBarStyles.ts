import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const searchBarStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			padding: 12,
			backgroundColor: colors.cardColor,
			borderRadius: 10,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			marginBottom: 15,
		},
		textInput: {
			color: colors.textColor,
			outlineWidth: 0,
			fontFamily: 'Rubik_400Regular',
		},
	});
};
