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
			fontWeight: 700,
			color: colors.textColor,
		},
		text: {
            alignSelf: "flex-start",
            fontSize: 16,
            color: colors.accentColor,
            marginBottom: 20,
        },
		scrollViewContainer: {
			paddingBottom: 24,
		},
	});
};
