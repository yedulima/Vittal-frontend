import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationsListStyles } from '@/styles/components/NotificationsListStyles';
import { NotificationInterface } from '@/utils/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Notification from '@/components/Notification';

interface NotificationListProps {
	data: NotificationInterface[];
}

export default function NotificationsList({ data }: NotificationListProps) {
	const { colors } = useThemeContext();
	const styles = notificationsListStyles(colors!);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Notification data={item} />}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListEmptyComponent={() => (
					<View style={styles.noDataContainer}>
						<Text style={styles.text}>Tudo limpo! 👍</Text>
					</View>
				)}
			/>
		</View>
	);
}
