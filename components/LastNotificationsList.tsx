import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { lastNotificationsListStyles } from '@/styles/components/LastNotificationsListStyles';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import NotificationsList from '@/components/NotificationsList';

export default function LastNotificationsList() {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = lastNotificationsListStyles(colors, fontSize);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Últimas notificações</Text>
				<View style={styles.moreContainer}>
					<Link href={'/(tabs)/notifications'}>
						<Text style={styles.moreText}>Ver todas</Text>
						<Feather name="arrow-right" size={15} style={styles.icon} />
					</Link>
				</View>
			</View>
			<NotificationsList slice={3} reversed />
		</View>
	);
}
