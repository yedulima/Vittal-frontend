import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const registerFormStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			width: '100%',
		},
		inputsContainer: {
			flex: 1,
			justifyContent: 'flex-start',
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
		cardsContainer: {
			flex: 1,
			gap: 14,
		},
		text: {
			alignSelf: 'center',
			fontSize: 24,
			fontWeight: 700,
			color: colors.textColor,
			marginBottom: 10,
		},
		selected: {
			backgroundColor: Colors.green[200],
			borderColor: Colors.green[400],
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
			fontWeight: 500,
			color: Colors.white[800],
		},
		backButton: {
			backgroundColor: 'transparent',
		},
		backText: {
			fontSize: 16,
			fontWeight: 500,
			color: colors.textColor,
		},
	});
};
