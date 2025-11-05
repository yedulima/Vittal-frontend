import { Colors } from '@/constants/Colors';
import { Measures } from '@/constants/SafeAreaMeasures';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const medicineModalStyles = (colors: ThemeColors) => {
	return StyleSheet.create({
		content: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			height: '50%',
			paddingHorizontal: Measures.horizontal,
			paddingTop: 10,
			backgroundColor: colors.cardColor,
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
			fontSize: 25,
			fontWeight: 500,
			color: colors.textColor,
		},
		descriptionContainer: {
			gap: 6,
			marginBottom: 15,
		},
		topicContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			gap: 6,
			marginBottom: 15,
		},
		topicText: {
			fontSize: 17,
			fontWeight: 600,
			color: colors.textColor,
		},
		text: {
			fontSize: 17,
			color: colors.accentColor,
		},
		button: {
			backgroundColor: Colors.green[600],
		},
		buttonText: {
			fontSize: 16,
			fontWeight: 600,
			color: Colors.white[800],
		},
		icon: {
			color: colors.iconColor,
		},
	});
};
