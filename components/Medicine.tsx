import { useThemeContext } from '@/contexts/ThemeContext';
import { medicineStyles } from '@/styles/components/MedicineStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MedicineModal from '@/components/modals/MedicineModal';

interface MedicineProp {
	data: {
		name: string;
		description: string;
		mlQt: string;
		time: string;
		done: boolean;
	};
}

export default function Medicine({ data }: MedicineProp) {
	const { colors } = useThemeContext();
	const styles = medicineStyles(colors!);

	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<>
			<TouchableOpacity style={styles.container} onPress={() => setIsVisible(true)} activeOpacity={0.8}>
				<View style={styles.info}>
					<View style={styles.figureContainer}>
						<FontAwesome5 name="capsules" style={styles.figure} size={30} />
					</View>
					<View style={styles.medicineInfos}>
						<View style={styles.infosHeader}>
							<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
								{data.name}
							</Text>
							<Text style={styles.time} numberOfLines={1} ellipsizeMode="tail">
								{data.time}
							</Text>
						</View>
						<Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
							{data.mlQt}
						</Text>
						<Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
							{data.done ? 'Tomado' : 'Pendente'}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
			<MedicineModal data={data} isVisible={isVisible} onClose={() => setIsVisible(false)} />
		</>
	);
}
