import { useThemeContext } from '@/contexts/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { defaultConfigsModalStyles } from '@/styles/components/modals/DefaultConfigsModalStyles';

interface DefaultConfigsModalProps {
	title: string;
	subTitle?: string;
	isVisible: boolean;
	onClose: () => void;
	children?: ReactNode;
}

export default function DefaultConfigsModal({
	title,
	subTitle,
	isVisible,
	onClose,
	children,
}: DefaultConfigsModalProps) {
	const { colors } = useThemeContext();
	const styles = defaultConfigsModalStyles(colors!);

	return (
		<View>
			<Modal animationType="none" transparent={true} visible={isVisible}>
				<View style={styles.container}>
					<View style={styles.content}>
						<View style={styles.header}>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>{title}</Text>
								<Text style={styles.subTitle}>{subTitle}</Text>
							</View>
							<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
								<Feather name="x" size={23} style={styles.icon} />
							</TouchableOpacity>
						</View>
						{children}
					</View>
				</View>
			</Modal>
		</View>
	);
}
