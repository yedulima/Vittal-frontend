import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { checkEmailExists } from '@/utils/checkEmailExists';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '@/components/Button';
import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

interface EmailAndPasswordFormProps {
	onBack: () => void;
	onSubmit: (data: RegisterSchema) => Promise<void>;
}

export default function EmailAndPasswordForm({ onBack, onSubmit }: EmailAndPasswordFormProps) {
	const { control, handleSubmit, setError } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const handleSubmitForm = async (data: RegisterSchema) => {
		const exists = await checkEmailExists(data.email);

		if (exists) {
			setError('email', {
				message: 'E-mail já está em uso',
			});
			return;
		}

		await onSubmit(data);
	};

	return (
		<View style={styles.container}>
			<ProgressBar percentage={75} />
			<Text style={styles.text}>E-mail e senha</Text>

			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="email"
					render={({ field, fieldState }) => (
						<Input
							title="Email"
							placeHolder="Insira seu email"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
							styleColors={LightTheme}
						/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					render={({ field, fieldState }) => (
						<Input
							title="Senha"
							placeHolder="Insira sua senha"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
							styleColors={LightTheme}
							isPassword
						/>
					)}
				/>
				<Controller
					control={control}
					name="confirmPassword"
					render={({ field, fieldState }) => (
						<Input
							title="Confirme sua senha"
							placeHolder="Insira a senha novamente"
							value={field.value}
							onChangeText={field.onChange}
							errorMessage={fieldState.error?.message}
							styleColors={LightTheme}
							isPassword
						/>
					)}
				/>
			</View>

			<>
				<Button
					text="Próximo"
					onPress={handleSubmit(handleSubmitForm)}
					style={styles.button}
					textStyle={styles.buttonText}
				/>
				<Button text="Voltar" onPress={onBack} style={styles.backButton} textStyle={styles.backText} />
			</>
		</View>
	);
}
