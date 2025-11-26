import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const newMedicineModalStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
		},
		content: {
			width: '100%',
			height: '100%',
			paddingHorizontal: Measures.horizontal,
			paddingTop: 10,
			paddingBottom: 80,
			gap: 10,
		},
		header: {
			width: '100%',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
			gap: 5,
		},
		title: {
			...fonts.h2,
		},
		subTitle: {
			...fonts.accent,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
