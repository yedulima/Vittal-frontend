import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const writeNotificationModalStyles = (colors: ThemeColors, size: FontSize) => {
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
		inputsContainer: {
			justifyContent: 'center',
			width: '100%',
			marginBottom: 10,
			gap: 12,
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
		bodyInput: {
			paddingBottom: 60,
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
		button: {
			backgroundColor: Colors.green[500],
		},
		buttonText: {
			...fonts.accent,
			...fonts.medium,
			color: colors.buttonTextColor,
		},
		icon: {
			color: colors.textColor,
			backgroundColor: colors.backgroundColor,
			borderRadius: 100,
			padding: 30,
		},
	});
};
