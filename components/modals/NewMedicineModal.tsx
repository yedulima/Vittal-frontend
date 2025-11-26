import { addMedication } from '@/api/services/idoso.service';
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
import NewMedicineForm from '@/forms/Medicine/NewMedicineForm';

interface NewMedicineModalProps {
	userId: string;
	isVisible: boolean;
	onClose: () => void;
}

export default function NewMedicineModal({ userId, isVisible, onClose }: NewMedicineModalProps) {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = newMedicineModalStyles(colors, fontSize);

	const handleNewMedicine = async (data: MedicineSchema, formMethods: UseFormReturn<MedicineSchema>) => {
		try {
			await addMedication({
				userId: userId,
				name: data.name,
				datePeriod: { start: data.datePeriod?.start as string, end: data.datePeriod?.end as string },
				dosage: data.dosage,
				description: data.description,
				schedules: data.schedules,
				instructions: data.instructions,
			});
			await useSendMessage(
				userId,
				user?.uid as string,
				'Novo medicamento cadastrado!',
				`Seu cuidador cadastrou ${data.name} como um novo medicamento para você!\n\nConfira na aba de medicações.`
			);
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
							<Text style={styles.title}>Cadastrar medicamento</Text>
						</View>
						<NewMedicineForm onSubmit={handleNewMedicine} />
					</ScrollView>
				</SafeAreaView>
			</Modal>
		</View>
	);
}
