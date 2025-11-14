import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const defaultConfigsModalStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: colors.backDropColor,
		},
		content: {
			width: '90%',
			height: '40%',
			paddingHorizontal: Measures.horizontal,
			paddingVertical: Measures.vertical + 5,
			borderRadius: 12,
			paddingTop: 10,
			backgroundColor: colors.cardColor,
			gap: 10,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 15,
			marginBottom: 15,
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
