import { NotificationInterface } from '@/api/interfaces';
import { listenForNotifications } from '@/api/services/notification.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationsListStyles } from '@/styles/components/NotificationsListStyles';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Notification from '@/components/Notification';

interface NotificationListProps {
	slice?: number;
	reversed?: boolean;
}

export default function NotificationsList({ slice, reversed }: NotificationListProps) {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = notificationsListStyles(colors, fontSize);

	const [notifications, setNotifications] = useState<NotificationInterface[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = listenForNotifications(user?.uid as string, (newNotifications: any) => {
			let notificationsArray = newNotifications;

			if (reversed) {
				notificationsArray = notificationsArray.reverse();
			}

			if (slice) {
				setNotifications(notificationsArray.slice(0, slice));
			} else {
				setNotifications(notificationsArray);
			}
			setLoading(false);
		});

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
		};
	}, []);

	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator size={'large'} color={colors.textColor} />
			) : (
				<FlatList
					data={notifications}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Notification data={item} />}
					showsVerticalScrollIndicator={false}
					scrollEnabled={false}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					ListEmptyComponent={() => (
						<View style={styles.medsContainer}>
							<View style={styles.noMedsContainer}>
								<Feather name="bell" size={fontSize.iconSize + 35} style={styles.icon} />
								<Text style={styles.noMedsText}>Nenhuma notificação</Text>
							</View>
						</View>
					)}
				/>
			)}
		</View>
	);
}
