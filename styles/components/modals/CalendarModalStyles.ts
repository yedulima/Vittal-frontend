import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const calendarModalStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

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
			...fonts.h3,
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
			...fonts.regular,
		},
		selectButton: {
			backgroundColor: colors.buttonColor,
		},
		selectButtonText: {
			...fonts.regular,
			fontSize: 16,
			color: colors.buttonTextColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
