import { sendMessage } from '@/api/services/notification.service';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { writeNotificationModalStyles } from '@/styles/components/modals/WriteNotificationModalStyles';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Modal, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import Input from '@/components/Input';

const writeNotificationSchema = z.object({
	title: z.string({ required_error: 'Insira um título para enviar' }).nonempty('Insira um título para continuar'),
	body: z
		.string({ required_error: 'Insira um conteúdo para continuar' })
		.nonempty('Insira um conteúdo para continuar'),
});

type WriteNotificationSchema = z.infer<typeof writeNotificationSchema>;

interface WriteNotificationModalProps {
	senderId: string;
	destUserId: string;
	isVisible: boolean;
	onClose: () => void;
}

export default function WriteNotificationModal({
	senderId,
	destUserId,
	isVisible,
	onClose,
}: WriteNotificationModalProps) {
	const { control, handleSubmit } = useForm<WriteNotificationSchema>({
		resolver: zodResolver(writeNotificationSchema),
		defaultValues: { title: '', body: '' },
	});

	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = writeNotificationModalStyles(colors, fontSize);

	const handleSendMessage = async (title: string, body: string) => {
		try {
			const payload = {
				dest_user: destUserId,
				title: title,
				body: body,
				sender: senderId,
			};
			await sendMessage(payload);
            onClose();
		} catch (error) {
			console.error(error);
		}
	};

	const submitHandler = async (data: WriteNotificationSchema) => {
		try {
			await handleSendMessage(data.title, data.body);
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={isVisible}>
				<SafeAreaView style={styles.container}>
					<View style={styles.content}>
						<View style={styles.header}>
							<BackArrow onPress={onClose} />
						</View>
						<View style={styles.nameAndIconContainer}>
							<View style={styles.figureContainer}>
								<Feather name="bell" style={styles.icon} size={fontSize.iconSize + 20} />
							</View>
							<Text style={styles.title}>Enviar notificação</Text>
						</View>
						<View style={styles.inputsContainer}>
							<Controller
								control={control}
								name="title"
								render={({ field, fieldState }) => (
									<Input
										title="Título"
										placeHolder="Insira um título para a mensagem"
										value={field.value}
										onChangeText={field.onChange}
										errorMessage={fieldState.error?.message}
									/>
								)}
							/>
							<Controller
								control={control}
								name="body"
								render={({ field, fieldState }) => (
									<Input
										title="Conteúdo"
										placeHolder="Insira um conteúdo para a mensagem"
										value={field.value}
										onChangeText={field.onChange}
										errorMessage={fieldState.error?.message}
									/>
								)}
							/>
						</View>
						<Button
							text="Enviar"
							onPress={handleSubmit(submitHandler)}
							style={styles.button}
							textStyle={styles.buttonText}
						/>
					</View>
				</SafeAreaView>
			</Modal>
		</View>
	);
}
