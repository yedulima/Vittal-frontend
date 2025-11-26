import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { MedicineSchema, medicineSchema } from '@/forms/Medicine/MedicineSchema';
import { medicineFormStyles } from '@/styles/forms/MedicineFormStyles';
import { formatDate } from '@/utils/formatDate';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioButton from '@/components/RadioButton';
import CalendarModal from '@/components/modals/CalendarModal';

interface NewMedicineFormProps {
	onSubmit: (data: MedicineSchema, formMethods: UseFormReturn<MedicineSchema>) => Promise<void>;
}

export default function NewMedicineForm({ onSubmit }: NewMedicineFormProps) {
	const formMethods = useForm<MedicineSchema>({
		resolver: zodResolver(medicineSchema),
		defaultValues: {
			name: '',
			description: '',
			instructions: '',
			dosage: '',
			schedules: [],
			datePeriod: { start: '', end: '' },
			isContinuos: false,
			newScheduleInput: '',
		},
	});

	const { control, handleSubmit, setValue, watch, getValues, clearErrors, setError } = formMethods;

	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicineFormStyles(colors, fontSize);

	const isContinuos = watch('isContinuos');
	const schedules = watch('schedules');
	const newScheduleInput = watch('newScheduleInput');

	const [startCalendarModalVisible, setStartCalendarModalVisible] = useState<boolean>(false);
	const [endCalendarModalVisible, setEndCalendarModalVisible] = useState<boolean>(false);

	const submitHandler = (data: MedicineSchema) => onSubmit(data, formMethods);

	const handleRemoveSchedule = (scheduleToRemove: string) => {
		const updatedSchedules = schedules.filter((schedule) => schedule !== scheduleToRemove);
		setValue('schedules', updatedSchedules as [string], { shouldValidate: true });
	};

	const handleAddSchedule = () => {
		const scheduleTrimmed = newScheduleInput!.trim();

		if (scheduleTrimmed === '') {
			return;
		}

		const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

		if (!timeRegex.test(scheduleTrimmed)) {
			setError('newScheduleInput', { type: 'manual', message: 'Insira um horário válido' });
			return;
		}

		if (!schedules.includes(scheduleTrimmed)) {
			setValue('schedules', [...schedules, scheduleTrimmed], { shouldValidate: true });
		}

		setValue('newScheduleInput', '');
		clearErrors('newScheduleInput');
	};

	const handleContinuosToggle = (currentValue: boolean) => {
		const newValue = !currentValue;
		setValue('isContinuos', newValue, { shouldValidate: false });

		const startDate = getValues('datePeriod.start');

		if (newValue) {
			if (startDate) {
				setValue('datePeriod.end', startDate, { shouldValidate: true });
			} else {
				setValue('datePeriod.end', '', { shouldValidate: true });
			}
		} else {
			setValue('datePeriod.end', '', { shouldValidate: true });
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="name"
					render={({ field, fieldState }) => (
						<Input
							title="Nome"
							placeHolder="Nome do medicamento"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="description"
					render={({ field, fieldState }) => (
						<Input
							title="Descrição"
							placeHolder="Insira uma descrição"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="dosage"
					render={({ field, fieldState }) => (
						<Input
							title="Dosagem"
							placeHolder="Ex: 50mg"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="instructions"
					render={({ field, fieldState }) => (
						<Input
							title="Instruções"
							placeHolder="Modo de uso"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
						/>
					)}
				/>

				<Controller
					control={control}
					name="datePeriod.start"
					render={({ field, fieldState }) => (
						<>
							<Input
								title="Data de ínicio"
								placeHolder="Dia / Mês / Ano"
								value={field.value as string}
								onChangeText={(t: string) => {
									const formatted = formatDate(t);
									field.onChange(formatted);
									if (isContinuos) {
										setValue('datePeriod.end', formatted, { shouldValidate: true });
									}
								}}
								errorMessage={fieldState.error?.message}
								keyType="numeric"
								rightIcon="calendar"
								rightIconPress={() => setStartCalendarModalVisible(true)}
							/>
							<CalendarModal
								currentDay={field.value as string}
								isVisible={startCalendarModalVisible}
								onClose={() => setStartCalendarModalVisible(false)}
								onSelect={(date: string) => {
									setValue('datePeriod.start', date, { shouldValidate: true });
									if (isContinuos) {
										setValue('datePeriod.end', date, { shouldValidate: true });
									}
								}}
								type="Future"
							/>
						</>
					)}
				/>

				{!isContinuos && (
					<Controller
						control={control}
						name="datePeriod.end"
						render={({ field, fieldState }) => (
							<>
								<Input
									title="Data de fim"
									placeHolder="Dia / Mês / Ano"
									value={field.value as string}
									onChangeText={(t: string) => field.onChange(formatDate(t))}
									errorMessage={fieldState.error?.message}
									keyType="numeric"
									rightIcon="calendar"
									rightIconPress={() => setEndCalendarModalVisible(true)}
								/>
								<CalendarModal
									currentDay={field.value as string}
									isVisible={endCalendarModalVisible}
									onClose={() => setEndCalendarModalVisible(false)}
									onSelect={(date: string) => setValue('datePeriod.end', date)}
									type="Future"
								/>
							</>
						)}
					/>
				)}

				<Controller
					control={control}
					name="isContinuos"
					render={({ field }) => (
						<RadioButton
							title="Uso contínuo"
							isActive={field.value as boolean}
							onPress={() => handleContinuosToggle(field.value as boolean)}
						/>
					)}
				/>

				<Text style={styles.schedulesText}>Horários</Text>
				<View style={styles.addScheduleContainer}>
					<Controller
						control={control}
						name="newScheduleInput"
						render={({ field, fieldState }) => (
							<Input
								placeHolder="Ex: 18:30"
								value={field.value as string}
								onChangeText={(t: string) => field.onChange(t)}
								errorMessage={fieldState.error?.message}
								containerStyle={styles.inputContainer}
							/>
						)}
					/>
					<Button
						text="Inserir"
						onPress={handleAddSchedule}
						style={styles.addScheduleButton}
						textStyle={styles.addScheduleButtonText}
					/>
				</View>
				<View>
					<FlatList
						data={schedules}
						keyExtractor={(item) => item}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.scheduleListContent}
						scrollEnabled={false}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => handleRemoveSchedule(item)}
								style={styles.scheduleItem}
								activeOpacity={0.8}
							>
								<Feather name="x" size={fontSize.iconSize} style={styles.icon} />
								<Text style={styles.scheduleItemText}>{item}</Text>
							</TouchableOpacity>
						)}
						ListEmptyComponent={() => {
							<View>
								<Text style={styles.emptyText}>Nenhum horário cadastrado ainda</Text>
							</View>;
						}}
					/>
				</View>
			</View>
			<Button
				text="Cadastrar"
				onPress={handleSubmit(submitHandler)}
				style={styles.button}
				textStyle={styles.buttonText}
			/>
		</View>
	);
}
