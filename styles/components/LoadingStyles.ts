import { LightTheme } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const loadingStyles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: LightTheme.backgroudColor,
			justifyContent: 'center',
			alignItems: 'center',
		},
	});
};
