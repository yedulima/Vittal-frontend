import { useThemeContext } from '@/contexts/ThemeContext';
import { medicinesListStyles } from '@/styles/components/MedicinesListStyles';
import { MedicinesInterface } from '@/utils/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Medicine from '@/components/Medicine';

interface MedicinesListProps {
	data: MedicinesInterface[];
}

export default function MedicinesList({ data }: MedicinesListProps) {
	const { colors } = useThemeContext();
	const styles = medicinesListStyles(colors);

	const pedingMedicines = data.filter((item) => item.done === false);

	return (
		<View style={styles.container}>
			<FlatList
				data={pedingMedicines}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Medicine data={item} />}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListEmptyComponent={() => (
					<View style={styles.noDataContainer}>
						<Text style={styles.text}>Tudo em dia! 👍</Text>
					</View>
				)}
			/>
		</View>
	);
}
