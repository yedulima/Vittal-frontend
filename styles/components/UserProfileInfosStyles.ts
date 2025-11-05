import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userProfileInfosStyles = (colors: ThemeColors) => {
	const photoSize = 150;

	return StyleSheet.create({
		container: {
			width: '100%',
			alignItems: 'center',
		},
		photo: {
			width: photoSize,
			height: photoSize,
			borderRadius: 100,
			borderWidth: 2,
			borderColor: colors.accentColor,
			backgroundColor: colors.imageBackgroundColor,
		},
		userCredentials: {
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 15,
			marginBottom: 30,
		},
		name: {
			fontSize: 18,
			fontWeight: 600,
			color: colors.textColor,
		},
		email: {
			fontSize: 15,
			color: colors.accentColor,
		},
	});
};
