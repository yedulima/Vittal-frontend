import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicinesInUseModalStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		content: {
			flex: 1,
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical,
			paddingTop: 10,
			backgroundColor: colors.cardColor,
			gap: 10,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			marginTop: 15,
			marginBottom: 15,
		},
        scrollViewContainer: {
			paddingBottom: 24,
		},
		titleContainer: {
			flex: 1,
			justifyContent: 'center',
			gap: 2,
		},
		title: {
			fontSize: 28,
			color: colors.textColor,
			fontFamily: 'Rubik_600SemiBold',
		},
		subTitle: {
			fontSize: 15,
			color: colors.accentColor,
			fontFamily: 'Rubik_400Regular',
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
