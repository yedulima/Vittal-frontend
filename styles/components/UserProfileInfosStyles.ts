import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userProfileInfosStyles = (colors: ThemeColors) => {
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
		email: {
			fontSize: 15,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
	});
};
