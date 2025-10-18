import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import ThemedText from './ThemedText';

type NotificationTypeName = 'Alerta de SOS' | 'Nova notificação' | 'Alerta de Medicamento';

interface NotificationTitleProps {
	title?: string;
	type: NotificationTypeName;
}

export type NotificationProps = TouchableOpacityProps & {
	title?: string;
	type?: NotificationTypeName;
	description: string;
	isView: boolean;
	date: string;
	onPress: () => void;
};

export default function Notification({
	title,
	type = 'Nova notificação',
	description,
	isView,
	date,
	onPress,
	style,
	...rest
}: NotificationProps) {
	const { button, secondaryText, card } = useThemeColor();

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				{ borderBottomColor: button, backgroundColor: isView ? 'transparent' : card },
				styles.container,
				style,
			]}
			activeOpacity={0.7}
			{...rest}
		>
			<View style={styles.notificationInfoContainer}>
				<NotificationIcon type={type} />
				<View style={styles.textContainer}>
					<View style={styles.titleContainer}>
						<NotificationTitle title={title} type={type} />
						<ThemedText text={date} style={[{ color: secondaryText }, styles.dateText]} />
					</View>
					<View style={styles.descriptionContainer}>
						<ThemedText text={description} style={[{ color: secondaryText }, styles.descriptionText]} />
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const NotificationTitle = ({ title, type }: NotificationTitleProps) => {
	const { primaryText, emergency, warning } = useThemeColor();

	if (type === 'Alerta de SOS') {
		return <ThemedText text={title ? title : type} style={[{ color: emergency }, styles.title]} />;
	} else if (type === 'Alerta de Medicamento') {
		return <ThemedText text={title ? title : type} style={[{ color: warning }, styles.title]} />;
	} else {
		return <ThemedText text={title ? title : type} style={[{ color: primaryText }, styles.title]} />;
	}
};

const NotificationIcon = ({ type }: { type: NotificationTypeName }) => {
	const { secondaryText, emergency, warning } = useThemeColor();

	if (type === 'Alerta de SOS') {
		return <Ionicons name="alert-circle-outline" size={42} color={emergency} />;
	} else if (type === 'Alerta de Medicamento') {
		return <Ionicons name="medical" size={41} color={warning} />;
	} else {
		return <Ionicons name="notifications-circle-outline" size={43} color={secondaryText} />;
	}
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 80,
		paddingHorizontal: 7,
		paddingBottom: 10,
		borderBottomWidth: 2,
		marginBottom: 10,
		borderRadius: 5,
	},
	notificationInfoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 12,
	},
	textContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	titleContainer: {
		width: '97%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	descriptionContainer: {
		width: '97%',
		maxHeight: 40,
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
	},
	dateText: {
		fontSize: 11.5,
	},
	descriptionText: {
		fontSize: 13,
	},
	status: {
		fontSize: 12,
		fontWeight: 'light',
	},
});
