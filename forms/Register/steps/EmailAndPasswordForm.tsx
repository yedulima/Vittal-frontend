import { Normal } from '@/constants/FontText';
import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { Controller, useFormContext, UseFormReturn } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';

interface EmailAndPasswordFormProps {
	onBack: () => void;
	onSubmit: (data: RegisterSchema, formMethods: UseFormReturn<RegisterSchema>) => Promise<void>;
}

export default function EmailAndPasswordForm({ onBack, onSubmit }: EmailAndPasswordFormProps) {
	const formMethods = useFormContext<RegisterSchema>();

	const { control, handleSubmit } = formMethods;

	const styles = registerFormStyles(LightTheme);

	const handleSubmitForm = (data: RegisterSchema) => onSubmit(data, formMethods);

	return (
		<View style={styles.container}>
			<ProgressBar percentage={100} />
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
							customFontSize={Normal}
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
							customFontSize={Normal}
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
							customFontSize={Normal}
						/>
					)}
				/>
			</View>

			<View style={styles.buttonSelectionContainer}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={handleSubmit(handleSubmitForm)}
					style={[styles.buttonContainer, styles.nextButton]}
				>
					<Text style={styles.chooseText}>Cadastrar-se</Text>
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
