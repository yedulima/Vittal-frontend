import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userPersonalInfosStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingVertical: 15,
			paddingHorizontal: 15,
			width: '100%',
			margin: 2,
			borderRadius: 5,
			backgroundColor: colors.cardColor,
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
			color: colors.textColor,
			fontSize: 20,
			fontFamily: 'Rubik_600SemiBold',
		},
		nameContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 8,
			gap: 8,
		},
		name: {
			fontSize: 17,
			color: colors.accentColor,
			fontFamily: 'Rubik_500Medium',
		},
		content: {
			fontSize: 16,
			color: colors.textColor,
			fontFamily: 'Rubik_400Regular',
		},
		noContent: {
			fontSize: 16,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
