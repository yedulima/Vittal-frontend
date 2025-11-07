import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const inputStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		title: {
			alignSelf: 'flex-start',
			fontSize: 16,
			fontWeight: 500,
			color: colors.textColor,
			marginBottom: 4,
		},
		inputContainer: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'center',
			gap: 5,
			backgroundColor: colors.cardColor,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
			padding: 11,
			borderRadius: 10,
		},
		textInput: {
			flex: 1,
			color: colors.textColor,
			outlineWidth: 0,
		},
		errorMessage: {
			alignSelf: 'flex-start',
			marginTop: 2,
			paddingLeft: 3,
			fontSize: 14,
			color: Colors.red[400],
		},
		icon: {
			color: colors.accentColor,
		},
	});
};
