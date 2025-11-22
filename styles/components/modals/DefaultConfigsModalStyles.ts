import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const defaultConfigsModalStyles = (colors: ThemeColors, size: FontSize) => {
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
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			borderRadius: 12,
			paddingTop: 10,
			paddingBottom: 80,
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
			gap: 5,
		},
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			gap: 2,
		},
		title: {
			...fonts.h1,
		},
		subTitle: {
			...fonts.accent,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
