import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const switchButtonStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			padding: 15,
			margin: 2,
			borderRadius: 5,
			backgroundColor: colors.cardColor,
		},
		text: {
			...fonts.accent,
			flex: 1,
			color: colors.textColor,
		},
		switch: {
			transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
			marginRight: 5,
		},
	});
};
