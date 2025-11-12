import { LightTheme } from '@/constants/Themes';
import { LoginSchema, loginSchema } from '@/forms/Login/LoginSchema';
import { loginFormStyles } from '@/styles/forms/LoginFormStyles';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface LoginFormProps {
	onSubmit: (data: LoginSchema) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	const { control, handleSubmit } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '' },
	});
	const styles = loginFormStyles(LightTheme);

	return (
		<View style={styles.container}>
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
							isPassword
						/>
					)}
				/>
			</View>

			<Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>

			<Button
				text="Entrar"
				onPress={handleSubmit(onSubmit)}
				style={styles.button}
				textStyle={styles.buttonText}
			/>
		</View>
	);
}
