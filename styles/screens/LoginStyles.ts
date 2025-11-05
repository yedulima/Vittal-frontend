import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const loginStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		text: {
			alignSelf: 'center',
			fontSize: 30,
			fontWeight: 700,
			color: colors.textColor,
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
		},
		googleButton: {
			padding: 17,
			borderRadius: 17,

			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.23,
			shadowRadius: 2.62,

			elevation: 4,
		},
		orText: {
			alignSelf: 'center',
			fontSize: 15,
			color: colors.accentColor,
		},
		separationLine: {
			backgroundColor: Colors.gray[100],
			width: '40%',
			height: 2,
		},
		orContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			width: '100%',
			gap: 15,
			marginTop: 17,
			marginBottom: 17,
		},
		forgotPassword: {
			fontSize: 15,
			textDecorationLine: 'underline',
			color: colors.textColor,
			marginBottom: 15,
		},
		noAccountText: {
			alignSelf: 'center',
			position: 'fixed',
			fontSize: 15,
			bottom: 0 + Measures.vertical,
			color: colors.accentColor,
		},
		registerDecoration: {
			color: Colors.green[500],
		},
	});
};
