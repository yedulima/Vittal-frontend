import { LightTheme } from '@/constants/Themes';
import { useAuthContext } from '@/contexts/AuthContext';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerStyles } from '@/styles/screens/RegisterStyles';
import { View } from 'react-native';

import RegisterForm from '@/forms/Register/RegisterForm';

export default function RegisterScreen() {
	const { register } = useAuthContext();
	const styles = registerStyles(LightTheme);

	const handleRegister = async (data: RegisterSchema) => {
		try {
			await register!(data.email, data.password, data.name, data.birtdayDate, data.role);
		} catch (error: any) {
			const errorCode = error.code;
			alert(errorCode);
		}
	};

	return (
		<View style={styles.container}>
			<RegisterForm onSubmit={handleRegister} />
		</View>
	);
}
