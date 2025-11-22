import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { lastNotificationsListStyles } from '@/styles/components/LastNotificationsListStyles';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import Notification from '@/components/Notification';

interface NotificationListProps {
	data: {
		id: string;
		title: string;
		description: string;
		date: string;
		iconName: React.ComponentProps<typeof Feather>['name'];
	}[];
}

export default function LastNotificationsList({ data }: NotificationListProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = lastNotificationsListStyles(colors, fontSize);

	const slicedData = data.slice(0, 2);

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
			<FlatList
				data={slicedData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Notification data={item} />}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</View>
	);
}
