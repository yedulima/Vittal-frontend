import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { Platform, StyleSheet } from 'react-native';

export const inputStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	const platform = Platform.OS === 'android';
	const inputPadding = platform ? 3 : 10;
	const inputPaddingSide = platform ? inputPadding + 10 : inputPadding;

	return StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		title: {
			...fonts.accent,
			alignSelf: 'flex-start',
			color: colors.textColor,
			marginBottom: 4,
		},
		inputContainer: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			gap: 5,
			backgroundColor: colors.cardColor,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
			padding: inputPadding,
			paddingHorizontal: inputPaddingSide,
			borderRadius: 10,
		},
		textInput: {
			...fonts.accent,
			flex: 1,
			color: colors.textColor,
			outlineWidth: 0,
		},
		errorMessage: {
			...fonts.accent,
			alignSelf: 'flex-start',
			marginTop: 5,
			paddingLeft: 3,
			color: Colors.red[400],
		},
		pressOpacity: {
			outlineWidth: 0,
		},
		icon: {
			color: colors.accentColor,
		},
	});
};
