import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const chooseUserStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		content: {
			flex: 1,
			justifyContent: 'space-between',
		},
		cardsContainer: {
			height: '60%',
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
