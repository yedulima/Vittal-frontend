import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const radioButtonStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
			// backgroundColor: colors.backgroundColor,
			paddingVertical: 14,
			paddingHorizontal: 16,
			borderWidth: 1,
			borderColor: colors.cardBorderColor,
			borderRadius: 15,
			flexDirection: 'row',
            alignItems: 'center',
			gap: 7,
		},
		textContainer: {
			flex: 1,
			gap: 2,
		},
		title: {
			...fonts.accent,
			color: colors.textColor,
		},
		description: {
            ...fonts.accent,
        },
        active: {
            borderColor: Colors.green[500],
        },
        checked: {
			color: Colors.green[500],
		},
		unchecked: {
			color: colors.iconColor,
		},
	});
};
