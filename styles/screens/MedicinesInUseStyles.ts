import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicinesInUseStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: colors.backgroundColor,
		},
		content: {
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			width: '100%',
			height: '100%',
			justifyContent: 'space-between',
			paddingTop: 10,
		},
		header: {
			width: '100%',
			alignItems: 'flex-start',
			justifyContent: 'center',
			marginTop: 15,
			marginBottom: 15,
		},
		title: {
			...fonts.h1,
		},
		patientName: {
			...fonts.accent,
			marginBottom: 20,
		},
		text: {
			...fonts.accent,
		},
		button: {
			backgroundColor: Colors.green[600],
            marginBottom: 15,
		},
		buttonText: {
			...fonts.accent,
			...fonts.semibold,
			color: Colors.white[800],
		},
		medsContainer: {
			padding: 20,
			backgroundColor: colors.cardColor,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
			borderRadius: 15,
		},
		noMedsContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			padding: 15,
            gap: 10,
		},
		noMedsText: {
			...fonts.accent,
			textAlign: 'center',
		},
		icon: {
			color: colors.iconColor,
		},
		separation: {
			width: '100%',
			margin: 6,
		},
		scrollView: {
			paddingBottom: 24,
		},
	});
};
