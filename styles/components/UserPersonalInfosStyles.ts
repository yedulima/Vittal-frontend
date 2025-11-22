import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userPersonalInfosStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			padding: 15,
			width: '100%',
			borderRadius: 15,
			backgroundColor: colors.cardColor,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			gap: 20,
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 8,
		},
		optionsSectionContainer: {
			width: '100%',
			gap: 10,
			marginBottom: 15,
		},
		title: {
			...fonts.h3,
		},
		nameContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 8,
			gap: 8,
		},
		name: {
			...fonts.accent,
			...fonts.medium,
		},
		content: {
			...fonts.accent,
			color: colors.textColor,
		},
		noContent: {
			...fonts.accent,
		},
		verifiedText: {
			...fonts.caption,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
