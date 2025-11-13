import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const headerStyles = (colors: ThemeColors) => {
	const photoSize = 65;

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
			fontSize: 30,
			color: colors.textColor,
			width: '100%',
			fontFamily: 'Rubik_700Bold',
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
			fontSize: 15,
			color: colors.accentColor,
			fontFamily: 'Rubik_300Light',
		},
	});
};
