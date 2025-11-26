import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { Dimensions, StyleSheet, Platform } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export const welcomeStyles = (colors: ThemeColors) => {
	const imageHeight = screenHeight * 0.7;
	const gradientHeight = 525;

	const platform = Platform.OS === 'android';
	const welcomeTextSize = platform ? 18 : 15;
	const sloganTextSize = platform ? 30 : 27;

	return StyleSheet.create({
		container: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-end',
			marginBottom: 50,
		},
		image: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: imageHeight,
		},
		linearGradient: {
			position: 'absolute',
			top: imageHeight - gradientHeight + 1,
			left: 0,
			width: '100%',
			height: gradientHeight,
			zIndex: 0,
		},
		header: {
			width: '100%',
			height: 100,
			alignItems: 'center',
			justifyContent: 'center',
			gap: 15,
		},
		title: {
			fontSize: welcomeTextSize,
			color: colors.accentColor,
			textTransform: 'uppercase',
			letterSpacing: 1.5,
			fontFamily: 'Rubik_400Regular',
			lineHeight: 15,
		},
		subTitle: {
			fontSize: sloganTextSize,
			color: colors.textColor,
			textTransform: 'capitalize',
			textAlign: 'center',
			fontFamily: 'Rubik_700Bold',
			letterSpacing: 1,
			lineHeight: 35,
		},
		greenSubTitle: {
			color: Colors.green[500],
		},
		buttonsContainer: {
			width: '100%',
			height: 120,
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 30,
			gap: 5,
		},
		button: {
			backgroundColor: colors.buttonColor,
			width: '85%',
			height: 50,
			borderRadius: 17,
		},
		registerButton: {
			backgroundColor: Colors.green[200],
		},
		buttonText: {
			fontSize: 18,
			color: Colors.white[800],
			fontFamily: 'Rubik_600SemiBold',
		},
		registerButtonText: {
			color: Colors.green[500],
		},
	});
};
