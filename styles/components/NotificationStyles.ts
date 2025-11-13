import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
			borderRadius: 5,
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
		notificationInfos: {
			justifyContent: 'center',
			flex: 1,
		},
		title: {
			fontSize: 15,
			color: colors.textColor,
			width: '95%',
			fontFamily: 'Rubik_500Medium',
		},
		description: {
			fontSize: 14,
			color: colors.accentColor,
			width: '95%',
			fontFamily: 'Rubik_300Light',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
