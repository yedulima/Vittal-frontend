import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const optionsSectionStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
			gap: 10,
			marginBottom: 15,
		},
		title: {
			color: colors.textColor,
			fontSize: 20,
			fontWeight: 600,
		},
	});
};
