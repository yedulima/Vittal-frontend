import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			padding: 15,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
		},
		info: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
		figureContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			width: 50,
			height: 50,
		},
		figure: {
			color: colors.iconColor,
		},
		medicineInfos: {
			justifyContent: 'center',
			flex: 1,
			gap: 6,
		},
		title: {
			...fonts.accent,
			...fonts.medium,
			color: colors.textColor,
		},
		description: {
			...fonts.caption,
			...fonts.light,
			width: '95%',
		},
		perDayHoursContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
		hoursContainer: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			gap: 5,
		},
		perDayText: {
			...fonts.caption,
			backgroundColor: Colors.green[500],
			color: Colors.white[800],
			textAlign: 'center',
			paddingHorizontal: 5,
			paddingVertical: 3,
			borderRadius: 15,
		},
		time: {
			...fonts.caption,
			...fonts.light,
		},
		infosHeader: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
