import { Medicine } from '@/api/interfaces';
import { useThemeContext } from '@/contexts/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { medicinesInUseModalStyles } from '@/styles/components/modals/MedicinesInUseModalStyles';

interface MedicinesInUseModalProps {
	data: Medicine[];
	isVisible: boolean;
	onClose: () => void;
}

export default function MedicinesInUseModal({ data, isVisible, onClose }: MedicinesInUseModalProps) {
	const { colors } = useThemeContext();
	const styles = medicinesInUseModalStyles(colors);

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={isVisible}>
				<View style={styles.content}>
					<View style={styles.header}>
						<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
							<Feather name="x" size={22} style={styles.icon} />
						</TouchableOpacity>
					</View>
					<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
						<Text style={styles.title}>Medicamentos em uso</Text>
						<FlatList
							data={data}
							keyExtractor={(item) => item.name}
							renderItem={({ item }) => (
								<View>
									<Text>{item.name}</Text>
								</View>
							)}
						/>
					</ScrollView>
				</View>
			</Modal>
		</View>
	);
}
