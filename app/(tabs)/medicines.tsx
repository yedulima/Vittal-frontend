import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicinesStyles } from '@/styles/screens/MedicinesStyles';
import { MEDICINES } from '@/utils/data';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MedicinesList from '@/components/MedicinesList';

export default function MedicinesScreen() {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicinesStyles(colors, fontSize);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Medicações</Text>
			<Text style={styles.text}>Medicações do dia</Text>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<MedicinesList data={MEDICINES} />
			</ScrollView>
		</SafeAreaView>
	);
}
