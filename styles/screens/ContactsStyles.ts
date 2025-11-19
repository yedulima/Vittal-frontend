import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactsStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		title: {
			alignSelf: 'flex-start',
			fontSize: 30,
			color: colors.textColor,
			fontFamily: 'Rubik_700Bold',
		},
		text: {
			alignSelf: 'flex-start',
			fontSize: 16,
			color: colors.accentColor,
			marginBottom: 20,
			fontFamily: 'Rubik_400Regular',
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
		addContainer: {
			alignSelf: 'flex-end',
			position: 'fixed',
			bottom: Measures.vertical + 50,
			backgroundColor: Colors.green[500],
			paddingVertical: 7,
			paddingHorizontal: 9,
			borderRadius: 50,
		},
		icon: {
			color: Colors.white[800],
		},
	});
};
