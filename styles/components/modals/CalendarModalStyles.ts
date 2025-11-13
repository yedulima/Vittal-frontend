import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const calendarModalStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		content: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			height: '60%',
			paddingHorizontal: Measures.horizontal,
			paddingTop: 10,
			paddingBottom: 30,
			backgroundColor: colors.cardColor,
			gap: 10,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 10,
		},
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			gap: 2,
		},
		title: {
			fontSize: 20,
			color: colors.textColor,
			fontFamily: 'Rubik_500Medium',
		},
		calendarContainer: {
			justifyContent: 'space-between',
			height: '100%',
			paddingBottom: 45,
		},
		calendar: {
			flex: 1,
			backgroundColor: 'transparent',
		},
		textDay: {
			fontFamily: 'Rubik_400Regular',
		},
		selectButton: {
			backgroundColor: colors.buttonColor,
		},
		selectButtonText: {
			fontSize: 16,
			fontFamily: 'Rubik_500Medium',
			color: colors.buttonTextColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
