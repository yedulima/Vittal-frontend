import { Normal } from '@/constants/FontText';
import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

interface PhoneNumberFormProps {
	onBack: () => void;
	onNext: () => void;
}

import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

export default function PhoneNumberForm({ onBack, onNext }: PhoneNumberFormProps) {
	const { control, trigger, reset } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const handleNext = async () => {
		const isValid = await trigger('phoneNumber');
		if (isValid) onNext();
	};

	return (
		<View style={styles.container}>
			<ProgressBar percentage={50} />
			<Text style={styles.text}>Número de telefone</Text>

			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="phoneNumber"
					render={({ field, fieldState }) => (
						<Input
							title="Telefone"
							placeHolder="Insira seu telefone"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
							styleColors={LightTheme}
							customFontSize={Normal}
						/>
					)}
				/>
			</View>

			<View style={styles.buttonSelectionContainer}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={handleNext}
					style={[styles.buttonContainer, styles.nextButton]}
				>
					<Text style={styles.chooseText}>Próximo</Text>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						reset();
						onBack();
					}}
					style={[styles.buttonContainer, styles.backButton]}
				>
					<Text style={styles.backText}>Voltar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
