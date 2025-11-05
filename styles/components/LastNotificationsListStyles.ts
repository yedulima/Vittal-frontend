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
			fontWeight: 600,
			color: colors.textColor,
		},
		moreContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
		},
		moreText: {
			fontSize: 16,
			color: colors.accentColor,
			marginRight: 5,
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
