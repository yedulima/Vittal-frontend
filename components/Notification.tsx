import { NotificationInterface } from '@/api/interfaces';
import { markNotificationAsRead } from '@/api/services/notification.service';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationStyles } from '@/styles/components/NotificationStyles';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import NotificationModal from '@/components/modals/NotificationModal';

interface NotificationProp {
	data: NotificationInterface;
}

export default function Notification({ data }: NotificationProp) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = notificationStyles(colors, fontSize);

	const [isVisibleNotificationModal, setIsVisibleNotificationModal] = useState<boolean>(false);

	const handlePressNotification = async () => {
		if (!data.read) {
			await handleMarkAsRead();
		}
		setIsVisibleNotificationModal(true);
	};

	const handleMarkAsRead = async () => {
		try {
			await markNotificationAsRead(data.id);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: data.read ? colors.backgroundColor : colors.cardColor }]}
			onPress={handlePressNotification}
			activeOpacity={0.8}
		>
			<View style={styles.info}>
				<View style={styles.figureContainer}>
					<Feather name="bell" style={styles.figure} size={30} />
				</View>
				<View style={styles.notificationInfos}>
					<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
						{data.title || 'Nova notificação'}
					</Text>
					<Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
						{data.body || 'Sem descrição'}
					</Text>
				</View>
			</View>
			<Feather name="arrow-right" size={17} style={styles.icon} />
			<NotificationModal
				data={data}
				isVisible={isVisibleNotificationModal}
				onClose={() => setIsVisibleNotificationModal(false)}
			/>
		</TouchableOpacity>
	);
}
