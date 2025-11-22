import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const idosoProfileModalStyles = (colors: ThemeColors) => {
	const photoSize = 110;

	return StyleSheet.create({
		content: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
			paddingTop: 10,
			backgroundColor: colors.backgroundColor,
			gap: 10,
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
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
		profileHeader: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 10,
			marginBottom: 25,
			padding: 25,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			gap: 4,
		},
		name: {
			fontSize: 18,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		age: {
			fontSize: 16,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		profilePhoto: {
			width: photoSize,
			height: photoSize,
			borderRadius: 100,
			borderWidth: 1,
			marginBottom: 15,
			borderColor: colors.accentColor,
			backgroundColor: colors.imageBackgroundColor,
		},
		medicinesHeader: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginBottom: 9,
		},
		medicinesTitle: {
			fontSize: 20,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		medicinesContent: {
			backgroundColor: colors.backgroundColor,
			borderRadius: 12,
			padding: 15,
			gap: 20,
		},
		plusIcon: {
			color: colors.textColor,
		},
		closeIcon: {
			color: colors.textColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
