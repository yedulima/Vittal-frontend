import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const loginStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		inputsContainer: {
			justifyContent: 'center',
			width: '100%',
			marginTop: 25,
			marginBottom: 10,
			gap: 15,
		},
		googleButton: {
			padding: 17,
			borderRadius: 17,

			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.23,
			shadowRadius: 2.62,

			elevation: 4,
		},
		orText: {
			alignSelf: 'center',
			fontSize: 15,
			color: colors.accentColor,
			fontFamily: 'Rubik_500Medium',
		},
		separationLine: {
			backgroundColor: Colors.gray[100],
			width: '40%',
			height: 2,
		},
		orContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			width: '100%',
			gap: 15,
			marginTop: 17,
			marginBottom: 17,
		},
		noAccountText: {
			alignSelf: 'center',
			fontSize: 15,
			marginTop: 10,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		registerDecoration: {
			color: Colors.green[500],
		},
	});
};
