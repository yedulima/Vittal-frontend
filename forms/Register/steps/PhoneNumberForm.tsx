import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

interface PhoneNumberFormProps {
	onBack: () => void;
	onNext: () => void;
}

import Button from '@/components/Button';
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
						/>
					)}
				/>
			</View>

			<>
				<Button text="Próximo" onPress={handleNext} style={styles.button} textStyle={styles.buttonText} />
				<Button
					text="Voltar"
					onPress={() => {
						reset();
						onBack();
					}}
					style={styles.backButton}
					textStyle={styles.backText}
				/>
			</>
		</View>
	);
}
