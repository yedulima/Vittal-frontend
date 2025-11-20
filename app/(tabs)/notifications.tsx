import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationsStyles } from '@/styles/screens/NotificationsStyles';
import { NOTIFICATIONS } from '@/utils/data';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NotificationsList from '@/components/NotificationsList';

export default function NotificationsScreen() {
	const { colors } = useThemeContext();
	const styles = notificationsStyles(colors);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Notificações</Text>
			<Text style={styles.text}>Notificações recentes</Text>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<NotificationsList data={NOTIFICATIONS} />
			</ScrollView>
		</SafeAreaView>
	);
}
