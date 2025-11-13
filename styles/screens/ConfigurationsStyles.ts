import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const configurationsStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingVertical: Measures.vertical,
			paddingHorizontal: Measures.horizontal,
		},
		title: {
			alignSelf: 'flex-start',
			fontSize: 30,
			color: colors.textColor,
			marginBottom: 20,
			fontFamily: 'Rubik_700Bold',
		},
		button: {
			backgroundColor: colors.cardColor,
		},
		buttonText: {
			fontSize: 16,
			fontFamily: 'Rubik_400Regular',
			color: colors.textColor
		},
		logoutButton: {
			width: '100%',
			backgroundColor: Colors.red[400],
		},
		logoutText: {
			fontSize: 16,
			color: Colors.white[800],
			fontFamily: 'Rubik_400Regular',
		},
	});
};
