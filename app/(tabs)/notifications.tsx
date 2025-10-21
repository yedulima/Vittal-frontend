import { StyleSheet } from 'react-native';

import Notification from '@/components/Notification';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function NotificationsScreen() {
	return (
		<ThemedSafeAreaView>
			<ThemedText text="Notificações" type="title" style={styles.title} />
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
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		alignSelf: 'flex-start',
		paddingBottom: 30,
	},
});
