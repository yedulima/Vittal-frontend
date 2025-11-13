import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const notificationsStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
		},
		title: {
			alignSelf: 'flex-start',
			fontSize: 30,
			color: colors.textColor,
			fontFamily: 'Rubik_700Bold',
		},
		text: {
			alignSelf: 'flex-start',
			fontSize: 16,
			color: colors.accentColor,
			marginBottom: 20,
			fontFamily: 'Rubik_400Regular',
		},
		scrollViewContainer: {
			paddingBottom: 24,
		},
	});
};
