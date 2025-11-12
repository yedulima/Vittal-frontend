import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

interface NameAndProfilePhotoFormProps {
	onBack: () => void;
	onNext: () => void;
}

export default function NameAndProfilePhotoForm({ onBack, onNext }: NameAndProfilePhotoFormProps) {
	const { control, setValue, trigger } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const handleNext = async () => {
		const isValid = await trigger('name');
		if (isValid) onNext();
	};

	return (
		<View style={styles.container}>
			<ProgressBar percentage={25} />
			<Text style={styles.text}>Nome e foto de perfil</Text>

			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="name"
					render={({ field, fieldState }) => (
						<Input
							title="Nome"
							placeHolder="Insira seu nome completo"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
						/>
					)}
				/>
			</View>

			<>
				<Button text="Próximo" onPress={handleNext} style={styles.button} textStyle={styles.buttonText} />
				<Button
					text="Voltar"
					onPress={() => {
						setValue('role', '');
						setValue('name', '');
						onBack();
					}}
					style={styles.backButton}
					textStyle={styles.backText}
				/>
			</>
		</View>
	);
}
