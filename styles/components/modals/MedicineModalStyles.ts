import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineModalStyles = (colors: ThemeColors) => {
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
			fontSize: 28,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
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
			fontSize: 17,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		text: {
			fontSize: 16,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		button: {
			backgroundColor: Colors.green[600],
		},
		buttonText: {
			fontSize: 16,
			color: Colors.white[800],
			fontFamily: 'Rubik_600SemiBold',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
