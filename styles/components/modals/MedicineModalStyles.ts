import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineModalStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: colors.backDropColor,
		},
		content: {
			width: '90%',
			minHeight: '45%',
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			borderRadius: 12,
			justifyContent: 'space-between',
			paddingTop: 10,
			backgroundColor: colors.cardColor,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
		},
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			gap: 2,
		},
		title: {
			...fonts.h1,
		},
		descriptionContainer: {
			gap: 6,
			marginBottom: 15,
		},
		topicContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			gap: 6,
			marginBottom: 15,
		},
		topicText: {
			...fonts.accent,
			...fonts.semibold,
			color: colors.textColor,
		},
		text: {
			...fonts.accent,
		},
		button: {
			backgroundColor: Colors.green[600],
		},
		buttonText: {
			...fonts.accent,
			...fonts.semibold,
			color: Colors.white[800],
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
