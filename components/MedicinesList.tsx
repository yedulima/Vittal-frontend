import { Medicine as MedicineInterface } from '@/api/interfaces';
import { getMedicationsByUserId } from '@/api/services/idoso.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicinesListStyles } from '@/styles/components/MedicinesListStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import Medicine from '@/components/Medicine';

interface MedicinesListProps {
	reversed?: boolean;
}

export default function MedicinesList({ reversed }: MedicinesListProps) {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicinesListStyles(colors, fontSize);

	const [medicines, setMedicines] = useState<MedicineInterface[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getMedicines = async () => {
			const medications = await getMedicationsByUserId(user?.uid!);
			let medicationsData = medications.data.data;

			if (reversed) {
				medicationsData = medicationsData.reverse();
			}

			setMedicines(medicationsData);
		};

		getMedicines();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={medicines}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Medicine data={item} userId={user?.uid as string} />}
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListEmptyComponent={() => (
					<View style={styles.medsContainer}>
						<View style={styles.noMedsContainer}>
							<FontAwesome5 name="capsules" size={fontSize.iconSize + 35} style={styles.icon} />
							<Text style={styles.noMedsText}>Nenhum medicamento cadastrado</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
}
