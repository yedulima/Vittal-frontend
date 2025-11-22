import { addIdoso } from '@/api/services/cuidador.service';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { addIdosoModalStyles } from '@/styles/components/modals/AddIdosoModalStyles';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';

import Button from '@/components/Button';
import Input from '@/components/Input';

const addIdosoSchema = z.object({
	id: z.string({ required_error: 'Insira um id para continuar' }).nonempty('Insira um id para continuar'),
});

type AddIdosoSchema = z.infer<typeof addIdosoSchema>;

interface AddIdosoModalProps {
	isVisible: boolean;
	onClose: () => void;
	onIdosoAdded: () => void;
}

export default function AddIdosoModal({ isVisible, onClose, onIdosoAdded }: AddIdosoModalProps) {
	const { control, handleSubmit, setError, setValue } = useForm<AddIdosoSchema>({
		resolver: zodResolver(addIdosoSchema),
		defaultValues: { id: '' },
	});

	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = addIdosoModalStyles(colors, fontSize);

	const submitHandler = async (data: AddIdosoSchema) => {
		try {
			await addIdoso(data.id);
			setValue('id', '');
			onIdosoAdded();
			onClose();
		} catch (error: any) {
			setError('id', { message: 'Id fornecido inválido' });
		}
	};

	return (
		<View>
			<Modal animationType="none" transparent={true} visible={isVisible}>
				<View style={styles.container}>
					<View style={styles.content}>
						<View style={styles.header}>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>Adicionar novo idoso</Text>
								<Text style={styles.text}>Insira o id do idoso para adicionar</Text>
							</View>
							<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
								<Feather name="x" size={23} style={styles.icon} />
							</TouchableOpacity>
						</View>
						<View style={styles.addContainer}>
							<Controller
								name="id"
								control={control}
								render={({ field, fieldState }) => (
									<Input
										title="Id do idoso"
										placeHolder="Insira o id aqui"
										value={field.value}
										onChangeText={field.onChange}
										errorMessage={fieldState.error?.message}
									/>
								)}
							/>

							<Button
								text="Adicionar"
								onPress={handleSubmit(submitHandler)}
								style={styles.addButton}
								textStyle={styles.addButtonText}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
