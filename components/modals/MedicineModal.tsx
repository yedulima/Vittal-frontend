import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicineModalStyles } from '@/styles/components/modals/MedicineModalStyles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import Button from '@/components/Button';

interface DefaultConfigsModalProps {
	data: {
		name: string;
		description: string;
		mlQt: string;
		time: string;
		done: boolean;
	};
	isVisible: boolean;
	onClose: () => void;
}

export default function MedicineModal({ data, isVisible, onClose }: DefaultConfigsModalProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicineModalStyles(colors, fontSize);

	const [state, setState] = useState<boolean>(data.done);

	const toggleDone = () => {
		data.done = !data.done;
		setState(!state);
	};

	return (
		<View>
			<Modal animationType="none" transparent={true} visible={isVisible}>
				<View style={styles.container}>
					<View style={styles.content}>
						<View>
							<View style={styles.header}>
								<View style={styles.titleContainer}>
									<Text style={styles.title}>{data.name}</Text>
								</View>
								<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
									<Feather name="x" size={20} style={styles.icon} />
								</TouchableOpacity>
							</View>
							<View style={styles.topicContainer}>
								<Text style={styles.topicText}>Estado:</Text>
								<Text style={styles.text}>{state ? 'Tomado' : 'Pendente'}</Text>
							</View>
							<View style={styles.descriptionContainer}>
								<Text style={styles.topicText}>Descrição:</Text>
								<Text style={styles.text}>{data.description}</Text>
							</View>
							<View style={styles.topicContainer}>
								<Text style={styles.topicText}>Horário:</Text>
								<Text style={styles.text}>{data.time}</Text>
							</View>
							<View style={styles.topicContainer}>
								<Text style={styles.topicText}>Miligramas:</Text>
								<Text style={styles.text}>{data.mlQt}</Text>
							</View>
						</View>
						<Button
							text={`${state ? 'Desmarcar' : 'Marcar'} como tomado`}
							textStyle={styles.buttonText}
							style={styles.button}
							onPress={toggleDone}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
}
