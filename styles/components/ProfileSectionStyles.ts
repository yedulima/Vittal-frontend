import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const profileSectionStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
			marginBottom: 15,
			gap: 10,
		},
		title: {
			fontSize: 20,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
			alignSelf: 'flex-start',
		},
		sectionContent: {
			backgroundColor: colors.backgroudColor,
			borderRadius: 5,
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
			fontSize: 16,
			color: colors.textColor,
			fontFamily: 'Rubik_400Regular',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
