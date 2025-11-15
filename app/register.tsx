import { LightTheme } from '@/constants/Themes';
import { useAuthContext } from '@/contexts/AuthContext';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerStyles } from '@/styles/screens/RegisterStyles';
import { AUTH_ERROR_MESSAGES, getFormErrorFromFirebaseError } from '@/utils/firebaseErrorMapper';
import { useRouter } from 'expo-router';
import { UseFormReturn } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import RegisterForm from '@/forms/Register/RegisterForm';

export default function RegisterScreen() {
	const { register } = useAuthContext();
	const styles = registerStyles(LightTheme);
	const router = useRouter();

	const handleRegister = async (data: RegisterSchema, formMethods: UseFormReturn<RegisterSchema>) => {
		try {
			await register!(data.email, data.password, data.name, data.birtdayDate, data.role, data.profilePhoto!);
			router.navigate('/login');
		} catch (error: any) {
			const errorCode = error.code;
			const formError = getFormErrorFromFirebaseError(errorCode);

			if (formError.message === AUTH_ERROR_MESSAGES.WEAK_PASSWORD) {
				formMethods.setError('password', formError, { shouldFocus: true });
				return;
			}

			if (formError.message === AUTH_ERROR_MESSAGES.EMAIL_ALREADY_IN_USE) {
				formMethods.setError('email', formError, { shouldFocus: true });
				return;
			}

			if (formError.message === AUTH_ERROR_MESSAGES.GENERIC_ERROR) {
				console.error(errorCode);
				alert(formError.message);
			}

			formMethods.setError('email', formError);
			formMethods.setError('password', formError);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<RegisterForm onSubmit={handleRegister} />
		</SafeAreaView>
	);
}
