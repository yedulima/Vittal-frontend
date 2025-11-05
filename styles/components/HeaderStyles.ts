import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const headerStyles = (colors: ThemeColors) => {
	const photoSize = 65;

	return StyleSheet.create({
        container: {
            width: "100%",
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
		},
		name: {
			fontSize: 30,
			fontWeight: 700,
			color: colors.textColor,
            width: "100%",
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
        },
	});
};
