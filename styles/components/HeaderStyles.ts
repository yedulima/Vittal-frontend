import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { Platform, StyleSheet } from 'react-native';

export const headerStyles = (colors: ThemeColors, size: FontSize) => {
	const photoSize = 75;

	const fonts = FontText(colors, size);

	const platform = Platform.OS;
	const accentTextStyle = platform === 'android' ? fonts.body : fonts.accent;

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
			...fonts.body,
			...fonts.regular,
			color: colors.textColor,
		},
		name: {
			...fonts.h1,
			lineHeight: 35,
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
