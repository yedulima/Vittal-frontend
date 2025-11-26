import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationsStyles } from '@/styles/screens/NotificationsStyles';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NotificationsList from '@/components/NotificationsList';

export default function NotificationsScreen() {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = notificationsStyles(colors, fontSize);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Notificações</Text>
			<Text style={styles.text}>Notificações recentes</Text>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<NotificationsList />
			</ScrollView>
		</SafeAreaView>
	);
}
