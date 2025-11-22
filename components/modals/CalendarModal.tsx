import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { calendarModalStyles } from '@/styles/components/modals/CalendarModalStyles';
import { configureCalendarLocale } from '@/utils/calendarLocale';
import { convertDMYToYMD } from '@/utils/convertFormatDate';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

import Button from '@/components/Button';

interface CalendarModalProps {
	isVisible: boolean;
	onClose: () => void;
	onSelect: (date: string) => void;
	currentDay: string;
	type: 'Past' | 'Future' | 'Normal';
	styleColors?: ThemeColors;
}

configureCalendarLocale();

export default function CalendarModal({
	isVisible,
	onClose,
	onSelect,
	currentDay,
	type,
	styleColors,
}: CalendarModalProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = calendarModalStyles(styleColors ? styleColors : colors, fontSize);

	const initialDateYMD = convertDMYToYMD(currentDay);
	const todayString = new Date().toISOString().split('T')[0];

	const [day, setDay] = useState<DateData | undefined>(() =>
		initialDateYMD
			? ({ dateString: initialDateYMD, day: 0, month: 0, year: 0, timestamp: 0 } as DateData)
			: undefined
	);

	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate());
	const yesterdayString = yesterday.toISOString().split('T')[0];

	let minDate: string | undefined = undefined;
	let maxDate: string | undefined = undefined;

	if (type === 'Future') minDate = todayString;
	if (type === 'Past') maxDate = yesterdayString;

	const handleSelectDay = () => {
		const formatedData = day?.dateString.split('-').reverse().join('/');
		onSelect(formatedData!);
		onClose();
	};

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={isVisible}>
				<View style={styles.content}>
					<View style={styles.header}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Selecione uma data</Text>
						</View>
						<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
							<Feather name="x" size={20} style={styles.icon} />
						</TouchableOpacity>
					</View>
					<View style={styles.calendarContainer}>
						<Calendar
							style={styles.calendar}
							renderArrow={(direction) => (
								<Feather name={`chevron-${direction}`} size={23} style={styles.icon} />
							)}
							theme={{
								textMonthFontSize: 20,
								textMonthFontFamily: 'Rubik_500Medium',
								textDayStyle: styles.textDay,
								textDayHeaderFontSize: 15,
								monthTextColor: Colors.black,
								todayTextColor: Colors.green[700],
								selectedDayBackgroundColor: Colors.green[500],
								selectedDayTextColor: Colors.white[800],
								arrowColor: Colors.black,
								calendarBackground: 'transparent',
							}}
							current={initialDateYMD || todayString}
							key={initialDateYMD}
							minDate={minDate}
							maxDate={maxDate}
							onDayPress={setDay}
							markedDates={day && { [day.dateString]: { selected: true } }}
							hideExtraDays
							disableAllTouchEventsForDisabledDays
						/>
						<Button
							text="Selecionar"
							onPress={handleSelectDay}
							style={styles.selectButton}
							textStyle={styles.selectButtonText}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
}
