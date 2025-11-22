import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const profileSectionStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
			marginBottom: 15,
			gap: 10,
		},
		title: {
			...fonts.body,
			alignSelf: 'flex-start',
		},
		sectionContent: {
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			backgroundColor: colors.cardColor,
			borderRadius: 15,
			padding: 15,
			gap: 20,
		},
		nameContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 8,
			gap: 8,
		},
		name: {
			...fonts.accent,
		},
		content: {
			...fonts.accent,
			...fonts.medium,
			color: colors.textColor,
		},
		noContent: {
			...fonts.accent,
		},
		copyContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 7,
		},
		multiplesItemsContainer: {
			flexWrap: 'wrap',
			flexDirection: 'row',
			width: '100%',
			gap: 8,
		},
		multiplesItemsItem: {
			backgroundColor: colors.cardColor,
			borderRadius: 10,
			padding: 8,
		},
		multiplesItemsText: {
			...fonts.accent,
			color: colors.textColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
