import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const idosoProfileModalStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 110;

	const fonts = FontText(colors, size);

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
			...fonts.body,
			...fonts.semibold,
			color: colors.textColor,
			textAlign: 'center',
		},
		age: {
			...fonts.accent,
			textAlign: 'center',
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
		icon: {
			color: colors.iconColor,
		},
	});
};
