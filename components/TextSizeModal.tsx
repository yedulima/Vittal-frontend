import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, ModalProps, Pressable, StyleSheet, View } from 'react-native';

import ThemedText from '@/components/ThemedText';

export type TextSizeModalProps = ModalProps & {
	isVisible: boolean;
	onClose: () => void;
};

export default function TextSizeModal({ isVisible, onClose, children, ...rest }: TextSizeModalProps) {
	const { primaryText, card } = useThemeColor();

	return (
		<Modal animationType="slide" transparent={true} visible={isVisible} {...rest}>
			<View style={[styles.container, { backgroundColor: card }]}>
				<View style={[styles.titleContainer, { backgroundColor: card }]}>
					<ThemedText text="Text size" type="subtitle" />
					<Pressable onPress={onClose}>
						<Ionicons name="close" size={22} color={primaryText} />
					</Pressable>
				</View>
				<View style={styles.contentWrapper}>{children}</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '25%',
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		position: 'absolute',
		bottom: 0,
	},
	titleContainer: {
		height: '20%',
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	contentWrapper: {
		paddingHorizontal: 25,
		marginTop: 10,
		gap: 12,
	},
});
