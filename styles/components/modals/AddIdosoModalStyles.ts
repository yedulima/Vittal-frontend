import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const addIdosoModalStyles = (colors: ThemeColors, size: FontSize) => {
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
			height: '40%',
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			borderRadius: 12,
			paddingTop: 10,
			backgroundColor: colors.cardColor,
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
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			gap: 2,
		},
		title: {
			...fonts.h2,
		},
		text: {
			...fonts.accent,
		},
		addContainer: {
			flex: 1,
			justifyContent: 'space-between',
		},
		addButton: {
			backgroundColor: Colors.green[500],
		},
		addButtonText: {
			...fonts.accent,
			fontFamily: 'Rubik_500Medium',
			color: colors.buttonTextColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
