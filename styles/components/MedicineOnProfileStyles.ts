import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineOnProfileStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',
            gap: 15,
		},
        content: {
            gap: 5,
        },
		title: {
			fontSize: 19,
			color: colors.textColor,
			fontFamily: 'Rubik_500Medium',
		},
		description: {
			fontSize: 14,
			color: colors.textColor,
			fontFamily: 'Rubik_400Regular',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
