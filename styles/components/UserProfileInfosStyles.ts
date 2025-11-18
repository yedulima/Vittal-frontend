import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userProfileInfosStyles = (colors: ThemeColors) => {
	const photoSize = 145;

	return StyleSheet.create({
		container: {
			width: '100%',
			alignItems: 'center',
		},
		userCredentials: {
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 15,
			marginBottom: 30,
		},
		name: {
			fontSize: 18,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		emailContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 5,
		},
		email: {
			fontSize: 15,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		verifiedBadge: {
			color: colors.iconColor,
		},
		photo: {
			alignSelf: 'center',
			width: photoSize,
			height: photoSize,
			borderRadius: 100,
			borderWidth: 2,
			marginBottom: 5,
			borderColor: colors.accentColor,
			backgroundColor: colors.imageBackgroundColor,
		},
	});
};
