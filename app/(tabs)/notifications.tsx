import { StyleSheet } from 'react-native';

import Notification from '@/components/Notification';
import ThemedView from '@/components/ThemedView';

export default function NotificationsScreen() {
	return (
		<ThemedView style={styles.container}>
			<Notification
				description="Ana não tomou o remédio da noite."
				type="Alerta de Medicamento"
				isView={true}
				date="15/07/2024 - 10:30"
				onPress={() => {}}
			/>
			<Notification
				description="Acionado por Gabriela Freitas."
				type="Alerta de SOS"
				isView={false}
				date="15/07/2024 - 10:30"
				onPress={() => {}}
			/>
			<Notification
				description="Já baixou os novos updates?"
				isView={false}
				date="15/07/2024 - 10:30"
				onPress={() => {}}
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 28,
	},
});
