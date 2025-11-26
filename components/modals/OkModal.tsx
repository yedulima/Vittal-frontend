import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { okModalStyles } from '@/styles/components/modals/OkModalStyles';
import { Modal, Text, View } from 'react-native';

import Button from '@/components/Button';

interface OkModalProps {
	title: string;
	isVisible: boolean;
	onClose: () => void;
}

export default function OkModal({ title, isVisible, onClose }: OkModalProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = okModalStyles(colors, fontSize);

	return (
		<View>
			<Modal animationType="none" transparent={true} visible={isVisible}>
				<View style={styles.container}>
					<View style={styles.content}>
						<View style={styles.header}>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>{title}</Text>
							</View>
						</View>
						<Button text="Ok" onPress={onClose} style={styles.button} textStyle={styles.buttonText} />
					</View>
				</View>
			</Modal>
		</View>
	);
}
