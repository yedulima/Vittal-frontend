import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const configurationsStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingVertical: Measures.vertical,
			paddingHorizontal: Measures.horizontal,
		},
		title: {
			...fonts.h1,
			marginBottom: 20,
		},
		text: {
			...fonts.accent,
			color: colors.textColor,
		},
		button: {
			backgroundColor: colors.cardColor,
		},
		buttonText: {
			...fonts.accent,
			color: colors.textColor,
		},
		logoutButton: {
			width: '100%',
			backgroundColor: Colors.red[400],
		},
		logoutText: {
			...fonts.accent,
			color: Colors.white[800],
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
	});
};
