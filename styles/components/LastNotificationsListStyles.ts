import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const lastNotificationsListStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
		},
		title: {
			fontSize: 17,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		moreContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		moreText: {
			fontSize: 16,
			color: colors.accentColor,
			marginRight: 5,
			fontFamily: 'Rubik_400Regular',
		},
		separator: {
			width: '100%',
			margin: 4,
		},
		icon: {
			color: colors.accentColor,
		},
	});
};
