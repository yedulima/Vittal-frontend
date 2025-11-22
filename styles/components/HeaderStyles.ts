import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const headerStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 65;

	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
		},
		header: {
			alignSelf: 'flex-start',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
		},
		userWelcomeContainer: {
			flex: 1,
		},
		hourWelcomeText: {
			fontSize: 16,
			color: colors.textColor,
			fontFamily: 'Rubik_400Regular',
		},
		name: {
			...fonts.h1,
			width: '100%',
		},
		photo: {
			backgroundColor: colors.imageBackgroundColor,
			width: photoSize,
			height: photoSize,
			borderRadius: 50,
			borderWidth: 3,
			borderColor: colors.cardBorderColor,
		},
		adversimentMessage: {
			...fonts.accent,
		},
	});
};
