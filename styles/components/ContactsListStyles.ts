import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactsListStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			width: '100%',
			paddingBottom: Measures.vertical,
		},
		noDataContainer: {
			flex: 1,
			alignItems: 'center',
			paddingTop: 15,
		},
		text: {
			...fonts.accent,
		},
		separator: {
			width: '100%',
			margin: 4,
		},
	});
};
