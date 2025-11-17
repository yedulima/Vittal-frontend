import { ContactInterface, TecnicalSheet } from '@/api/interfaces';
import { listenIdosoChanges } from '@/api/services/idoso.service';
import { useThemeContext } from '@/contexts/ThemeContext';
import { calculateAge } from '@/utils/calculateAge';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { idosoProfileModalStyles } from '@/styles/components/modals/IdosoProfileModalStyles';

import MedicineOnProfile from '@/components/MedicineOnProfile';
import ProfileSection from '@/components/ProfileSection';

interface IdosoProfileModalProps {
	data: ContactInterface;
	isVisible: boolean;
	onClose: () => void;
}

export default function IdosoProfileModal({ data, isVisible, onClose }: IdosoProfileModalProps) {
	const { colors } = useThemeContext();
	const styles = idosoProfileModalStyles(colors!);

	const [liveData, setLiveData] = useState<ContactInterface>(data);
	const [age] = useState<Number>(calculateAge(data.birthday));

	useEffect(() => {
		if (!isVisible || !liveData.id) return;

		const unsubscribe = listenIdosoChanges(data.id, (updatedData) => {
			if (updatedData) {
				setLiveData(updatedData as ContactInterface);
			}
		});

		return () => unsubscribe();
	}, [isVisible]);

	if (!isVisible) return null;

	const { allergies, bloodType, medicines } = liveData.technical_sheet as TecnicalSheet;

	return (
		<View>
			<Modal animationType="none" transparent={true} visible={isVisible}>
				<View style={styles.content}>
					<View style={styles.header}>
						<TouchableOpacity onPress={onClose} activeOpacity={0.9}>
							<Feather name="x" size={22} style={styles.icon} />
						</TouchableOpacity>
						<Text style={styles.title}>Perfil</Text>
						<TouchableOpacity activeOpacity={0.9}>
							<Feather name="more-vertical" size={22} style={styles.icon} />
						</TouchableOpacity>
					</View>
					<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
						<View style={styles.profileHeader}>
							<Image source={data.photoURL} style={styles.profilePhoto} />
							<Text style={styles.name}>{data.name}</Text>
							<Text style={styles.age}>{`${age} anos`}</Text>
						</View>
						<ProfileSection
							title="Informações Básicas"
							items={[
								{ name: 'Data de nascimento', content: data.birthday },
								{ name: 'Telefone', content: data.phoneNumber as string, canCopy: true },
								{ name: 'E-mail', content: data.email, canCopy: true },
								{
									name: 'Endereço',
									onEdit: () => {},
									content: liveData.address as string,
									canCopy: !!liveData.address,
								},
							]}
						/>
						<ProfileSection
							title="Informações Médicas"
							items={[
								{
									name: 'Tipo sanguíneo',
									onEdit: () => {},
									content: bloodType,
								},
								{
									name: 'Condições de saúde',
									onEdit: () => {},
									content: allergies,
								},
							]}
						/>
						<View style={styles.medicinesHeader}>
							<Text style={styles.medicinesTitle}>Medicamentos em uso</Text>
							<TouchableOpacity activeOpacity={0.9}>
								<Feather name="plus" size={18} style={styles.plusIcon} />
							</TouchableOpacity>
						</View>
						<View style={styles.medicinesContent}>
							<FlatList
								data={medicines}
								keyExtractor={(item) => item.name}
								renderItem={({ item }) => <MedicineOnProfile data={item} />}
								showsVerticalScrollIndicator={false}
								scrollEnabled={false}
								ListEmptyComponent={() => (
									<View>
										<Text style={styles.text}>Nenhum medicamento cadastrado ainda</Text>
									</View>
								)}
							/>
						</View>
					</ScrollView>
				</View>
			</Modal>
		</View>
	);
}
