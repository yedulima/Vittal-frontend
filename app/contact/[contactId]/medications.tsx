import { Medicine as MedicineInterface } from '@/api/interfaces';
import { getMedicationsByUserId } from '@/api/services/idoso.service';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicinesInUseStyles } from '@/styles/screens/MedicinesInUseStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import Medicine from '@/components/Medicine';
import NewMedicineModal from '@/components/modals/NewMedicineModal';

export default function MedicinesInUse() {
	const { contactId } = useLocalSearchParams();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicinesInUseStyles(colors, fontSize);

	const [medicines, setMedicines] = useState<MedicineInterface[] | null>(null);
	const [isVisibleNewMedicine, setIsVisibleNewMedicine] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getMedicines = async () => {
			try {
				const response = await getMedicationsByUserId(contactId as string);
				const medicines = response.data.data;

				setMedicines(medicines);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getMedicines();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.header}>
					<BackArrow />
				</View>
				<Text style={styles.title}>Medicamentos</Text>
				<Text style={styles.patientName}>Medicamentos do idoso</Text>
				<Button
					text="Cadastrar novo"
					onPress={() => setIsVisibleNewMedicine(true)}
					style={styles.button}
					textStyle={styles.buttonText}
				/>
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
					{loading ? (
						<ActivityIndicator color={colors.textColor} size={'large'} />
					) : (
						<FlatList
							data={medicines}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => <Medicine data={item} userId={contactId as string} />}
							showsVerticalScrollIndicator={false}
							scrollEnabled={false}
							ItemSeparatorComponent={() => <View style={styles.separation} />}
							ListEmptyComponent={() => (
								<View style={styles.medsContainer}>
									<View style={styles.noMedsContainer}>
										<FontAwesome5
											name="capsules"
											size={fontSize.iconSize + 35}
											style={styles.icon}
										/>
										<Text style={styles.noMedsText}>Nenhum medicamento cadastrado</Text>
									</View>
								</View>
							)}
						/>
					)}
				</ScrollView>
			</View>
			<NewMedicineModal
				userId={contactId as string}
				isVisible={isVisibleNewMedicine}
				onClose={() => setIsVisibleNewMedicine(false)}
			/>
		</SafeAreaView>
	);
}
