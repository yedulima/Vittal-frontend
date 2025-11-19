import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const addIdosoModalStyles = (colors: ThemeColors) => {
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
			fontSize: 24,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		text: {
			fontSize: 16,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		addContainer: {
			flex: 1,
			justifyContent: 'space-between',
		},
		addButton: {
			backgroundColor: Colors.green[500],
		},
		addButtonText: {
			fontSize: 16,
			fontFamily: 'Rubik_500Medium',
			color: colors.buttonTextColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
