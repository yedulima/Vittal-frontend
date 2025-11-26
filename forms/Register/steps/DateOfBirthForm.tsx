import { Normal } from '@/constants/FontText';
import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { formatDate } from '@/utils/formatDate';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';
import CalendarModal from '@/components/modals/CalendarModal';

interface DateOfBirthFormProps {
	onBack: () => void;
	onNext: () => void;
}

export default function DateOfBirthForm({ onBack, onNext }: DateOfBirthFormProps) {
	const { control, trigger, setValue } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const handleNext = async () => {
		const isValid = await trigger('birthday');
		if (isValid) onNext();
	};

	return (
		<View style={styles.container}>
			<ProgressBar percentage={75} />
			<Text style={styles.text}>Data de nascimento</Text>

			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="birthday"
					render={({ field, fieldState }) => (
						<>
							<Input
								title="Data de nascimento"
								placeHolder="Dia / Mês / Ano"
								value={field.value}
								maxLength={10}
								keyType="numeric"
								onChangeText={(t: string) => field.onChange(formatDate(t))}
								errorMessage={fieldState.error?.message}
								styleColors={LightTheme}
								rightIcon="calendar"
								rightIconPress={() => setIsModalVisible(true)}
								customFontSize={Normal}
							/>
							<CalendarModal
								isVisible={isModalVisible}
								onClose={() => setIsModalVisible(false)}
								onSelect={(date: string) => setValue('birthday', date)}
								currentDay={field.value}
								type="Past"
								styleColors={LightTheme}
							/>
						</>
					)}
				/>
			</View>

			<View style={styles.buttonSelectionContainer}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={handleNext}
					style={[styles.buttonContainer, styles.nextButton]}
				>
					<Text style={styles.chooseText}>Selecionar</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.9}
					onPress={onBack}
					style={[styles.buttonContainer, styles.backButton]}
				>
					<Text style={styles.backText}>Voltar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
