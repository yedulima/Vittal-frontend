import { LightTheme } from '@/constants/Themes';
import { RegisterSchema } from '@/forms/Register/RegisterSchema';
import { registerFormStyles } from '@/styles/forms/RegisterFormStyles';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';
import { Normal } from '@/constants/FontText';

const PlaceHolderImage = require('@/assets/images/Portrait_Placeholder.png');

import Input from '@/components/Input';
import ProgressBar from '@/components/ProgressBar';
import UserProfilePhoto from '@/components/UserProfilePhoto';

interface NameAndProfilePhotoFormProps {
	onBack: () => void;
	onNext: () => void;
}

export default function NameAndProfilePhotoForm({ onBack, onNext }: NameAndProfilePhotoFormProps) {
	const { control, setValue, trigger, reset } = useFormContext<RegisterSchema>();

	const styles = registerFormStyles(LightTheme);

	const handleNext = async () => {
		const isValid = await trigger('name');
		if (isValid) onNext();
	};

	return (
		<View style={styles.container}>
			<ProgressBar percentage={25} />
			<Text style={styles.text}>Nome e foto de perfil</Text>

			<Controller
				control={control}
				name="photoURL"
				render={() => (
					<UserProfilePhoto
						imgSource={PlaceHolderImage}
						onImageChoiced={(uri: string) => setValue('photoURL', uri)}
						styleColors={LightTheme}
					/>
				)}
			/>

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
