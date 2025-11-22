import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationStyles } from '@/styles/components/NotificationStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface NotificationProp {
	data: {
		title: string;
		description: string;
		date: string;
		iconName: React.ComponentProps<typeof Feather>['name'];
	};
}

export default function Notification({ data }: NotificationProp) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = notificationStyles(colors, fontSize);

	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.8}>
			<View style={styles.info}>
				<View style={styles.figureContainer}>
					<Feather name={data.iconName} style={styles.figure} size={30} />
				</View>
				<View style={styles.notificationInfos}>
					<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
						{data.title}
					</Text>
					<Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
						{data.description}
					</Text>
				</View>
			</View>
			<Feather name="arrow-right" size={17} style={styles.icon} />
		</TouchableOpacity>
	);
}
