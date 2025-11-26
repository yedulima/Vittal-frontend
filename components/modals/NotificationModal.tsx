import { NotificationInterface } from '@/api/interfaces';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { notificationModalStyles } from '@/styles/components/modals/NotificationModalStyles';
import { FirestoreTimestamp, formatTimestampToDateTime } from '@/utils/formatTimestampToDateTime';
import { Feather } from '@expo/vector-icons';
import { Modal, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';

interface NotificationModalProps {
	data: NotificationInterface;
	isVisible: boolean;
	onClose: () => void;
}

export default function NotificationModal({ data, isVisible, onClose }: NotificationModalProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = notificationModalStyles(colors, fontSize);

	const hour = formatTimestampToDateTime(data.time as unknown as FirestoreTimestamp);

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={isVisible}>
				<SafeAreaView style={styles.container}>
					<View style={styles.content}>
						<View style={styles.header}>
							<BackArrow onPress={onClose} />
						</View>
						<View style={styles.nameAndIconContainer}>
							<View style={styles.figureContainer}>
								<Feather name="bell" style={styles.icon} size={fontSize.iconSize + 20} />
							</View>
							<Text style={styles.title}>{data.title}</Text>
							<Text style={styles.hour}>{hour}</Text>
						</View>
						<Text style={styles.text}>{data.body}</Text>
					</View>
				</SafeAreaView>
			</Modal>
		</View>
	);
}
