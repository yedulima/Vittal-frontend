import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactsListStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			width: '100%',
			paddingBottom: Measures.vertical,
		},
		noDataContainer: {
			flex: 1,
			alignItems: "center",
			paddingTop: 15,
		},
		text: {
			color: colors.accentColor,
			fontSize: 16,
			fontFamily: 'Rubik_400Regular'
		},
		separator: {
			width: '100%',
			margin: 4,
		},
	});
};
