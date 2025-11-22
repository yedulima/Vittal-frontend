import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userProfileInfosStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 145;

	const fonts = FontText(colors, size);

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
			gap: 5,
		},
		name: {
			...fonts.body,
			...fonts.semibold,
			textAlign: 'center',
		},
		emailContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			gap: 5,
		},
		email: {
			...fonts.accent,
			textAlign: 'center',
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
