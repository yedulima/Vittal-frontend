import { Medicine } from '@/api/interfaces';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicineOnProfileStyles } from '@/styles/components/MedicineOnProfileStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface MedicineOnProfileProps {
	data: Medicine;
}

export default function MedicineOnProfile({ data }: MedicineOnProfileProps) {
	const { colors } = useThemeContext();
	const styles = medicineOnProfileStyles(colors!);

	return (
		<TouchableOpacity activeOpacity={0.8}>
			<View style={styles.container}>
				<FontAwesome5 name="capsules" size={35} style={styles.icon} />
				<View style={styles.content}>
					<View>
						<Text style={styles.title}>{data.name}</Text>
					</View>
					<View>
						<Text style={styles.description}>{data.description}</Text>
						<Text style={styles.description}>{data.dosage}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}
