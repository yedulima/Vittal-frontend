import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicinesListStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
		},
		noDataContainer: {
			flex: 1,
			alignItems: 'center',
			paddingTop: 15,
		},
		text: {
			...fonts.accent,
		},
		separator: {
			width: '100%',
			margin: 4,
		},
	});
};
