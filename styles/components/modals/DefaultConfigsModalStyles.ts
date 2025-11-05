import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const defaultConfigsModalStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		content: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			height: '40%',
			paddingHorizontal: Measures.horizontal,
			paddingTop: 10,
			backgroundColor: colors.cardColor,
			gap: 10,
		},
		header: {
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		titleContainer: {
			flex: 1,
            justifyContent: "center",
            gap: 2,
		},
		title: {
			fontSize: 20,
			fontWeight: 500,
			color: colors.textColor,
		},
		subTitle: {
			fontSize: 15,
			fontWeight: 400,
			color: colors.accentColor,
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
