import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const homeStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		emergencyButton: {
			justifyContent: 'center',
			alignItems: 'center',
			height: 150,
			backgroundColor: Colors.red[400],
			marginVertical: 18,
		},
		emergencyButtonText: {
			...fonts.h1,
			alignSelf: 'center',
			color: Colors.white[800],
		},
		emergencyButtonCaption: {
			...fonts.body,
			alignSelf: 'center',
			color: Colors.white[800],
			lineHeight: 15,
		},
	});
};
