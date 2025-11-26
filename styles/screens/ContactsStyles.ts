import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { Platform, StyleSheet } from 'react-native';

export const contactsStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	const platform = Platform.OS;
	const accentTextStyle = platform === 'android' ? fonts.h3 : fonts.accent;
	const addButtonPaddingBottom = platform === 'android' ? -10 : Measures.vertical + 50;

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
		},
		title: {
			...fonts.h1,
			paddingTop: Measures.vertical,
			lineHeight: 35,
		},
		text: {
			...fonts.h3,
			...fonts.regular,
			color: colors.accentColor,
			marginBottom: 20,
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
		addContainer: {
			alignSelf: 'flex-end',
			position: 'fixed',
			bottom: addButtonPaddingBottom,
			backgroundColor: Colors.green[500],
			paddingVertical: 9,
			paddingHorizontal: 11,
			borderRadius: 50,
		},
		icon: {
			color: Colors.white[800],
		},
	});
};
