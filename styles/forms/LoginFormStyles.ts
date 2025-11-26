import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const loginFormStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
		},
		inputsContainer: {
			justifyContent: 'center',
			width: '100%',
			marginTop: 25,
			marginBottom: 10,
			gap: 15,
		},
		button: {
			backgroundColor: colors.buttonColor,
			borderRadius: 17,
		},
		buttonText: {
			fontSize: 16,
			fontWeight: 500,
			color: Colors.white[800],
			fontFamily: 'Rubik_500Medium',
		},
		buttonContainer: {
			padding: 13,
			margin: 2,
			borderRadius: 15,
			backgroundColor: colors.buttonColor,
			alignItems: 'center',
			justifyContent: 'center',
			gap: 7,
		},
		forgotPassword: {
			fontSize: 15,
			color: colors.textColor,
			marginBottom: 15,
			fontFamily: 'Rubik_400Regular',
		},
	});
};
