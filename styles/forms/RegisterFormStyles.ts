import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const registerFormStyles = (colors: ThemeColors) => {
	const photoSize = 145;

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
			fontSize: 16,
			color: Colors.white[800],
			fontFamily: 'Rubik_600SemiBold',
		},
		backButton: {
			backgroundColor: 'transparent',
		},
		backText: {
			fontSize: 16,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
	});
};
