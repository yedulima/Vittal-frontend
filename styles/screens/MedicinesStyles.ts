import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicinesStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

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
	});
};
