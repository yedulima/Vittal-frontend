import { Normal } from '@/constants/FontText';
import { LightTheme } from '@/constants/Themes';
import { LoginSchema, loginSchema } from '@/forms/Login/LoginSchema';
import { loginFormStyles } from '@/styles/forms/LoginFormStyles';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import Input from '@/components/Input';

interface LoginFormProps {
	onSubmit: (data: LoginSchema, formMethods: UseFormReturn<LoginSchema>) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	const formMethods = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '' },
	});

	const { control, handleSubmit } = formMethods;

	const styles = loginFormStyles(LightTheme);

	const submitHandler = (data: LoginSchema) => onSubmit(data, formMethods);

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
			</View>

			<Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>

			<TouchableOpacity
				activeOpacity={0.9}
				onPress={handleSubmit(submitHandler)}
				style={[styles.buttonContainer, styles.button]}
			>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
}
