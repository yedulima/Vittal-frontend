import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const contactStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 110;

	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
			paddingTop: 10,
			backgroundColor: colors.backgroundColor,
			gap: 10,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
		},
		profileHeader: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 10,
			marginBottom: 25,
			padding: 25,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			gap: 4,
		},
		name: {
			...fonts.body,
			...fonts.semibold,
			textAlign: 'center',
		},
		age: {
			...fonts.accent,
			textAlign: 'center',
		},
		profilePhoto: {
			width: photoSize,
			height: photoSize,
			borderRadius: 100,
			borderWidth: 1,
			marginBottom: 15,
			borderColor: colors.accentColor,
			backgroundColor: colors.imageBackgroundColor,
		},
		button: {
			backgroundColor: colors.cardColor,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			borderRadius: 15,
			gap: 7,
			marginBottom: 10,
		},
		buttonText: {
			...fonts.accent,
			padding: 3,
			color: colors.textColor,
		},
		excludeMedicineText: {
			color: Colors.white[800],
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
