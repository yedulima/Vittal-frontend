import { AddMedicinePayload, Medicine } from '@/api/interfaces';
import { updateMedication } from '@/api/services/idoso.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { MedicineSchema } from '@/forms/Medicine/MedicineSchema';
import { useSendMessage } from '@/hooks/useSendMessage';
import { newMedicineModalStyles } from '@/styles/components/modals/NewMedicineModalStyles';
import { UseFormReturn } from 'react-hook-form';
import { Modal, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import UpdateMedicineForm from '@/forms/Medicine/UpdateMedicine';

interface UpdateMedicineModalProps {
	userId: string;
	medicineId: string;
	data: AddMedicinePayload;
	isVisible: boolean;
	onSubmit: (data: Medicine) => void;
	onClose: () => void;
}

export default function UpdateMedicineModal({
	userId,
	medicineId,
	data,
	isVisible,
	onSubmit,
	onClose,
}: UpdateMedicineModalProps) {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = newMedicineModalStyles(colors, fontSize);

	const handleUpdateMedicine = async (newData: MedicineSchema, formMethods: UseFormReturn<MedicineSchema>) => {
		try {
			const response = await updateMedication({
				userId: userId,
				medicationId: medicineId,
				name: newData.name,
				datePeriod: { start: newData.datePeriod?.start as string, end: newData.datePeriod?.end as string },
				dosage: newData.dosage,
				description: newData.description,
				schedules: newData.schedules,
				instructions: newData.instructions,
			});

			const responseData = response.data.data;

			const differentNames = newData.name !== data.name;

			await useSendMessage(
				userId,
				user?.uid as string,
				`${differentNames ?? `${data.name} agora se chama ${newData.name} e foi atualizado.`}`,
				`Seu cuidador cadastrou ${data.name} como um novo medicamento para você!\n\nConfira na aba de medicações.`
			);

			onSubmit(responseData);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={isVisible}>
				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
						<View style={styles.header}>
							<BackArrow onPress={onClose} />
							<Text style={styles.title}>Atualizar medicamento</Text>
						</View>
						<UpdateMedicineForm data={data} onSubmit={handleUpdateMedicine} />
					</ScrollView>
				</SafeAreaView>
			</Modal>
		</View>
	);
}
