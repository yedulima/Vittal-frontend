import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const progressBarStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			justifyContent: 'center',
			marginTop: 15,
			marginBottom: 15,
			borderRadius: 15,
			width: '100%',
			height: 10,
			borderColor: colors.cardBorderColor,
			borderWidth: 1,
		},
		progressBar: {
			backgroundColor: Colors.green[400],
			borderRadius: 15,
			height: '100%',
		},
	});
};
