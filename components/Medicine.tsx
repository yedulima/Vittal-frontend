import { Medicine as MedicineInterface } from '@/api/interfaces';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { medicineStyles } from '@/styles/components/MedicineStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface MedicineProp {
	data: MedicineInterface;
	userId: string;
}

export default function Medicine({ data, userId }: MedicineProp) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = medicineStyles(colors, fontSize);

	const router = useRouter();

	const schedulesFormated = data.schedules.slice(0, 4).join(', ');

	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => router.navigate(`/contact/${userId}/medicine/${data.id}`)}
				activeOpacity={0.8}
			>
				<View style={styles.info}>
					<View style={styles.figureContainer}>
						<FontAwesome5 name="capsules" style={styles.figure} size={fontSize.iconSize + 20} />
					</View>
					<View style={styles.medicineInfos}>
						<View style={styles.infosHeader}>
							<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
								{data.name}
							</Text>
						</View>
						<Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
							{data.dosage}
						</Text>
						<View style={styles.perDayHoursContainer}>
							<Text style={styles.perDayText} numberOfLines={1} ellipsizeMode="tail">
								{data.schedules.length}x ao dia
							</Text>
							<View style={styles.hoursContainer}>
								<FontAwesome5 name="clock" style={styles.icon} size={15} />
								<Text style={styles.time} numberOfLines={1} ellipsizeMode="tail">
									{schedulesFormated}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</>
	);
}
