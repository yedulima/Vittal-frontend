import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { confirmActionModalStyles } from '@/styles/components/modals/ConfirmActionModalStyles';
import { Feather } from '@expo/vector-icons';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import Button from '@/components/Button';

interface ConfirmActionModalProps {
	title: string;
	subTitle: string;
	isVisible: boolean;
	onClose: () => void;
	onChoice: (feedback: boolean) => void;
	confirmButtonCustomColor?: string;
}

export default function ConfirmActionModal({
	title,
	subTitle,
	isVisible,
	onClose,
	onChoice,
	confirmButtonCustomColor,
}: ConfirmActionModalProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = confirmActionModalStyles(colors, fontSize);

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
								<Feather name="x" size={fontSize.iconSize} style={styles.icon} />
							</TouchableOpacity>
						</View>
						<Button
							text="Confirmar"
							onPress={() => {
								onChoice(true);
								onClose();
							}}
							style={[styles.confirmButton, { backgroundColor: confirmButtonCustomColor }]}
							textStyle={styles.buttonText}
						/>
						<Button
							text="Cancelar"
							onPress={() => {
								onChoice(false);
								onClose();
							}}
							style={styles.button}
							textStyle={styles.buttonText}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
}
