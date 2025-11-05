import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const buttonStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			paddingVertical: 15,
			paddingHorizontal: 15,
			margin: 2,
			borderRadius: 5,
			backgroundColor: colors.buttonColor,
			alignItems: 'center',
			justifyContent: 'center',
			gap: 7,
		},
		text: {
			flex: 1,
			color: colors.buttonTextColor,
		},
	});
};
