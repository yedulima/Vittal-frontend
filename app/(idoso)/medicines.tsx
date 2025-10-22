import { StyleSheet } from 'react-native';

import Medicine from '@/components/Medicine';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function MedicinesScreen() {
	return (
		<ThemedSafeAreaView>
			<ThemedText text="Medicamentos" type="title" style={styles.title} />
			<Medicine
				title="Dipirona"
				description="50mg"
				hour="14:30"
				date="14/02/2007"
				isView={false}
				onPress={() => {}}
			/>
            <Medicine
				title="Nimesulida"
				description="80mg"
				hour="14:30"
				date="14/02/2007"
				isView={false}
				onPress={() => {}}
			/>
            <Medicine
				title="Paracetamol"
				description="30mg"
				hour="16:00"
				date="14/02/2007"
				isView={false}
				onPress={() => {}}
			/>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		alignSelf: 'flex-start',
		marginBottom: 30,
	},
});
