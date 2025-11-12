import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { useRouter } from 'expo-router';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import UserCard from '@/components/UserCard';

interface ChooseUserFormProps {
	onNext: () => void;
}

export default function ChooseUserForm({ onNext }: ChooseUserFormProps) {
	const { control, setValue, trigger, getValues } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const handleNext = async () => {
		const isValid = await trigger('role');
		const roleValue = getValues('role');
		if (isValid && roleValue.length) onNext();
	};

	const router = useRouter();

	return (
		<View style={styles.container}>
			<ProgressBar percentage={0} />
			<Text style={styles.text}>Escolha o tipo de usuário</Text>

			<Controller
				control={control}
				name="role"
				render={({ field }) => (
					<View style={styles.cardsContainer}>
						<UserCard
							title="👩‍⚕️ Sou Cuidador"
							description="Quero oferecer ajuda e cuidar de quem precisa com carinho e dedicação."
							onPress={() => field.onChange('cuidador')}
							style={field.value === 'cuidador' ? styles.selected : styles.unselected}
						/>
						<UserCard
							title="👴 Sou Idoso"
							description="Quero receber apoio e ter alguém por perto para me ajudar no dia a dia."
							onPress={() => field.onChange('idoso')}
							style={field.value === 'idoso' ? styles.selected : styles.unselected}
						/>
					</View>
				)}
			/>

			<>
				<Button
					text="Selecionar"
					onPress={handleNext}
					style={styles.chooseButton}
					textStyle={styles.chooseText}
				/>
				<Button
					text="Voltar"
					onPress={() => {
						setValue('role', '');
						router.back();
					}}
					style={styles.backButton}
					textStyle={styles.backText}
				/>
			</>
		</View>
	);
}
