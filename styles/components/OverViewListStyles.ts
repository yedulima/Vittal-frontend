import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const overViewListStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			width: '100%',
			marginTop: 20,
		},
		text: {
			color: colors.textColor,
		},
	});
};
