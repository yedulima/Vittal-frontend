import { RegisterSchema, registerSchema } from '@/forms/Register/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { View } from 'react-native';

import ChooseUserForm from '@/forms/Register/steps/ChooseUserForm';
import DateOfBirthForm from '@/forms/Register/steps/DateOfBirthForm';
import EmailAndPasswordForm from '@/forms/Register/steps/EmailAndPasswordForm';
import NameAndProfilePhotoForm from '@/forms/Register/steps/NameAndProfilePhotoForm';
import PhoneNumberForm from '@/forms/Register/steps/PhoneNumberForm';

const PlaceHolderImage = require('@/assets/images/Portrait_Placeholder.png');

interface RegisterFormProps {
	onSubmit: (data: RegisterSchema, formMethods: UseFormReturn<RegisterSchema>) => Promise<void>;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
	const actualDate = new Date();
	const formattedDate = new Intl.DateTimeFormat('pt-BR').format(actualDate);

	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			photoURL: PlaceHolderImage,
			birthday: formattedDate,
			phoneNumber: '',
			role: '',
		},
	});

	const [step, setStep] = useState<number>(1);

	const onNext = () => {
		setStep(step + 1);
	};

	const onBack = () => {
		setStep(step - 1);
	};

	return (
		<FormProvider {...form}>
			<View style={{ flex: 1 }}>
				{step === 1 && <ChooseUserForm onNext={onNext} />}
				{step === 2 && <NameAndProfilePhotoForm onBack={onBack} onNext={onNext} />}
				{step === 3 && <PhoneNumberForm onBack={onBack} onNext={onNext} />}
				{step === 4 && <DateOfBirthForm onBack={onBack} onNext={onNext} />}
				{step === 5 && <EmailAndPasswordForm onBack={onBack} onSubmit={onSubmit} />}
			</View>
		</FormProvider>
	);
}
