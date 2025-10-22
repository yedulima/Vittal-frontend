import { StyleSheet } from 'react-native';

import Notification from '@/components/Notification';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function NotificationsScreen() {
	return (
		<ThemedSafeAreaView>
			<ThemedText text="Notificações" type="title" style={styles.title} />
			<Notification
				title='Alerta do cuidador'
				description="Cuidador enviou alerta."
				type='Alerta de SOS'
				isView={false}
				date="15/05/2024 - 11:00"
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
