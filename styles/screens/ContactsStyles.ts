import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactsStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		title: {
			...fonts.h1,
		},
		text: {
			...fonts.accent,
			marginBottom: 20,
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
