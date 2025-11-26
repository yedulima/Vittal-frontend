import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { Platform, StyleSheet } from 'react-native';

export const registerFormStyles = (colors: ThemeColors) => {
	const photoSize = 145;

	const platform = Platform.OS === 'android';
	const textSize = platform ? 18 : 16;

	return StyleSheet.create({
		container: {
			flex: 1,
			width: '100%',
		},
		inputsContainer: {
			flex: 1,
			justifyContent: 'flex-start',
			width: '100%',
			marginBottom: 10,
			gap: 15,
		},
		button: {
			backgroundColor: colors.buttonColor,
			borderRadius: 17,
		},
		buttonText: {
			fontSize: 16,
			color: Colors.white[700],
			fontFamily: 'Rubik_600SemiBold',
		},
		cardsContainer: {
			flex: 1,
			gap: 14,
		},
		text: {
			alignSelf: 'center',
			fontSize: 24,
			color: colors.textColor,
			marginBottom: 35,
			fontFamily: 'Rubik_700Bold',
		},
		selected: {
			backgroundColor: Colors.green[200],
			borderColor: Colors.green[600],
		},
		unselected: {
			backgroundColor: colors.cardColor,
		},
		chooseButton: {
			backgroundColor: Colors.green[500],
			borderRadius: 17,
		},
		chooseText: {
			fontSize: textSize,
			color: Colors.white[800],
			fontFamily: 'Rubik_600SemiBold',
		},
		backButton: {
			backgroundColor: colors.cardColor,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.23,
			shadowRadius: 2.62,

			elevation: 4,
		},
		backText: {
			fontSize: textSize,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		buttonSelectionContainer: {
			gap: 5,
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
		nextButton: {
			backgroundColor: Colors.green[500],
		},
	});
};
