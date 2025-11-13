import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const contactStyles = (colors: ThemeColors) => {
	const photoSize = 50;

	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: colors.cardColor,
			borderRadius: 5,
			padding: 10,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
		},
		info: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			gap: 10,
		},
		photo: {
			width: photoSize,
			height: photoSize,
			borderRadius: 25,
			backgroundColor: colors.imageBackgroundColor,
		},
		userCredentials: {
			justifyContent: 'center',
		},
		name: {
			fontSize: 15,
			color: colors.textColor,
			fontFamily: 'Rubik_500Medium',
		},
		status: {
			fontSize: 13,
			color: colors.accentColor,
			fontFamily: 'Rubik_300Light',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
