import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationsListStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
		},
		noDataContainer: {
			flex: 1,
			alignItems: 'center',
			paddingTop: 15,
		},
		text: {
			color: colors.accentColor,
			fontSize: 16,
		},
		separator: {
			width: '100%',
			margin: 4,
		},
	});
};
