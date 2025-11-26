import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.backgroundColor,
			paddingHorizontal: Measures.horizontal,
			paddingTop: Measures.vertical - 10,
			gap: 20,
		},
		centralizedContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: colors.backgroundColor,
		},
		header: {
			width: '100%',
			alignItems: 'flex-start',
			justifyContent: 'center',
			marginTop: 15,
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
		status: {
			...fonts.accent,
		},
		figureContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			marginBottom: 15,
		},
		dosageAndFrequencyContainer: {
			flexWrap: 'wrap',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			width: '100%',
			gap: 8,
		},
		// Container para a dosagem e frequência
		topContainer: {
			flex: 1,
			alignItems: 'center',
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			paddingVertical: 20,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			gap: 6,
		},
		// Nome do conteúdo
		label: {
			...fonts.accent,
			color: colors.accentColor,
		},
		// Conteúdo em si
		labelContent: {
			...fonts.body,
			...fonts.medium,
			color: colors.textColor,
		},
		button: {
			backgroundColor: colors.cardColor,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			borderRadius: 15,
			gap: 7,
		},
		excludeButton: {
			backgroundColor: Colors.red[400],
			borderColor: Colors.red[400],
		},
		buttonText: {
			...fonts.accent,
			padding: 3,
			color: colors.textColor,
		},
		scrollViewContainer: {
			paddingBottom: 24,
			gap: 20,
		},
		icon: {
			color: colors.textColor,
			backgroundColor: colors.cardColor,
			borderRadius: 100,
			padding: 30,
		},
	});
};
