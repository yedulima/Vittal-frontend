import { Colors } from '@/constants/Colors';
import { FontSize, FontText } from '@/constants/FontText';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';
import { Measures } from '@/constants/SafeAreaMeasures';

export const medicineFormStyles = (colors: ThemeColors, size: FontSize) => {
	const fonts = FontText(colors, size);

	return StyleSheet.create({
		container: {
			width: '100%',
			paddingBottom: Measures.vertical + 10,
		},
		inputsContainer: {
			justifyContent: 'center',
			width: '100%',
			marginBottom: 10,
			gap: 12,
		},
		button: {
			backgroundColor: Colors.green[500],
			borderRadius: 17,
		},
		buttonText: {
			...fonts.accent,
			color: Colors.white[800],
		},
		schedulesText: {
			...fonts.accent,
			...fonts.semibold,
			color: Colors.white[800],
		},
		addScheduleContainer: {
			flexDirection: 'row',
			gap: 5,
		},
		addScheduleButton: {
			backgroundColor: Colors.green[500],
		},
		addScheduleButtonText: {
			...fonts.accent,
			color: Colors.white[800],
		},
		inputContainer: {
			flex: 1,
		},
		scheduleListContent: {
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: 8,
			paddingBottom: 10,
		},
		scheduleItem: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: Colors.green[500],
			borderRadius: 10,
			paddingHorizontal: 12,
			paddingVertical: 10,
			gap: 5,
		},
		scheduleItemText: {
			...fonts.accent,
			color: Colors.white[800],
			textAlign: 'center',
		},
		emptyText: {
			...fonts.accent,
		},
		icon: {
			color: Colors.white[800],
		},
	});
};
