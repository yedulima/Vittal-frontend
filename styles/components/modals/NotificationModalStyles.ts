import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationModalStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
		},
		content: {
			flex: 1,
			width: '100%',
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			paddingTop: 10,
			paddingBottom: 80,
			gap: 10,
		},
		header: {
			width: '100%',
			alignItems: 'center',
			marginTop: 15,
			marginBottom: 15,
			gap: 5,
		},
		nameAndIconContainer: {
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
		},
		title: {
			...fonts.h2,
			width: '100%',
			textAlign: 'center',
		},
		hour: {
			...fonts.caption,
			width: '100%',
			textAlign: 'center',
			marginTop: 5,
		},
		figureContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			marginBottom: 15,
		},
		text: {
			...fonts.accent,
		},
		icon: {
			color: colors.textColor,
			backgroundColor: colors.backgroundColor,
			borderRadius: 100,
			padding: 30,
		},
	});
};
