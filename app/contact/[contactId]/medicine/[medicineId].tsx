import { Medicine as MedicineInterface } from '@/api/interfaces';
import { deleteMedication, getMedicationsByUserId, toggleMedicationStatus } from '@/api/services/idoso.service';
import { Colors } from '@/constants/Colors';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicineStyles } from '@/styles/screens/MedicineStyles';
import { calculateDateDifference } from '@/utils/calculateDateDifference';
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import ProfileSection from '@/components/ProfileSection';
import ConfirmActionModal from '@/components/modals/ConfirmActionModal';
import UpdateMedicineModal from '@/components/modals/UpdateMedicineModal';

export default function Medicine() {
	const { medicineId, contactId } = useLocalSearchParams();
	const { role } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicineStyles(colors, fontSize);

	const router = useRouter();

	const [medicine, setMedicine] = useState<MedicineInterface | null>(null);
	const [actualStatus, setActualStatus] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const [isVisibleUpdateMedicine, setIsVisibleUpdateMedicine] = useState<boolean>(false);
	const [isVisibleConfirmAction, setIsVisibleConfirmAction] = useState<boolean>(false);

	useEffect(() => {
		const getMedicines = async () => {
			try {
				const response = await getMedicationsByUserId(contactId as string);
				const medicines = response.data.data;

				const foundMedicine = medicines.find((med: any) => med.id === medicineId) || null;

				setMedicine(foundMedicine);
				setActualStatus(foundMedicine.status);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getMedicines();
	}, []);

	if (loading || !medicine) {
		return (
			<SafeAreaView style={styles.centralizedContainer}>
				<ActivityIndicator size="large" color={colors.textColor} />
			</SafeAreaView>
		);
	}

	if (!loading && !medicine) {
		return (
			<SafeAreaView style={styles.centralizedContainer}>
				<Text style={styles.title}>Medicamento não encontrado!</Text>
			</SafeAreaView>
		);
	}

	const schedulesFormated = medicine?.schedules.join(', ')!;
	const { start, end } = medicine?.datePeriod!;
	const daysDifference = calculateDateDifference(start, end) || 0;
	const isContinuos = start === end;

	const handleToggleMedicineStatus = async () => {
		try {
			const response = await toggleMedicationStatus({
				userId: contactId as string,
				medicationId: medicineId as string,
			});

			const data = response.data.data;
			setActualStatus(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleExcludeMedicine = async () => {
		try {
			setLoading(true);
			await deleteMedication({
				userId: contactId as string,
				medicationId: medicineId as string,
			});
			setLoading(false);
			router.back();
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.header}>
					<BackArrow />
				</View>
				<View style={styles.nameAndIconContainer}>
					<View style={styles.figureContainer}>
						<FontAwesome5 name="capsules" style={styles.icon} size={fontSize.iconSize + 20} />
					</View>
					<Text style={styles.title}>{medicine.name}</Text>
					<Text style={styles.status}>{actualStatus}</Text>
				</View>
				<View style={styles.dosageAndFrequencyContainer}>
					<View style={styles.topContainer}>
						<Text style={styles.label}>Dosagem</Text>
						<Text style={styles.labelContent}>{medicine.dosage}</Text>
					</View>
					<View style={styles.topContainer}>
						<Text style={styles.label}>Frequência</Text>
						<Text style={styles.labelContent}>{medicine.schedules.length}x ao dia</Text>
					</View>
				</View>
				<ProfileSection
					title="Descrição e instruções"
					items={[
						{ name: 'Descrição', content: medicine.description },
						{ name: 'Instruções', content: medicine.instructions },
					]}
				/>
				<ProfileSection
					title="Horários e duração"
					items={[
						{ name: 'Horário(s)', content: schedulesFormated },
						{
							name: 'Duração',
							content: isContinuos ? ['Uso contínuo'] : `${daysDifference.toString()} dias`,
						},
						{ name: 'Início do tratamento', content: start },
						{ name: 'Fim do tratamento', content: isContinuos ? '-' : end },
					]}
				/>

				{/* Opções para o cuidador somente */}
				{role === 'cuidador' && (
					<>
						<Button
							text="Editar medicamento"
							onPress={() => setIsVisibleUpdateMedicine(true)}
							style={styles.button}
							textStyle={styles.buttonText}
						/>
						<Button
							text={`${actualStatus === 'Ativo' ? 'Suspender' : 'Reativar'} medicação`}
							onPress={handleToggleMedicineStatus}
							style={styles.button}
							textStyle={styles.buttonText}
						/>
						<Button
							text="Excluir medicação"
							onPress={() => setIsVisibleConfirmAction(true)}
							style={[styles.button, styles.excludeButton]}
							textStyle={styles.buttonText}
						/>
					</>
				)}
			</ScrollView>
			<UpdateMedicineModal
				userId={contactId as string}
				medicineId={medicineId as string}
				data={{ userId: contactId as string, ...medicine }}
				isVisible={isVisibleUpdateMedicine}
				onSubmit={(data: MedicineInterface) => setMedicine(data)}
				onClose={() => setIsVisibleUpdateMedicine(false)}
			/>
			<ConfirmActionModal
				title="Excluir medicamento"
				subTitle="Deseja excluir esse medicamento?"
				onClose={() => setIsVisibleConfirmAction(false)}
				isVisible={isVisibleConfirmAction}
				onChoice={(feedback: boolean) => feedback && handleExcludeMedicine()}
				confirmButtonCustomColor={Colors.red[400]}
			/>
		</SafeAreaView>
	);
}
