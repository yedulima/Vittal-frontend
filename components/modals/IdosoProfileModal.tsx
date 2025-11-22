import { ContactInterface, TecnicalSheet } from '@/api/interfaces';
import { listenIdosoChanges } from '@/api/services/idoso.service';
import { useThemeContext } from '@/contexts/ThemeContext';
import { calculateAge } from '@/utils/calculateAge';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Modal, ScrollView, Text, View } from 'react-native';

import { idosoProfileModalStyles } from '@/styles/components/modals/IdosoProfileModalStyles';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import ProfileSection from '@/components/ProfileSection';
import MedicinesInUseModal from '@/components/modals/MedicinesInUseModal';

interface IdosoProfileModalProps {
	data: ContactInterface;
	isVisible: boolean;
	onClose: () => void;
}

export default function IdosoProfileModal({ data, isVisible, onClose }: IdosoProfileModalProps) {
	const { colors } = useThemeContext();
	const styles = idosoProfileModalStyles(colors);

	const [isMedicinesVisible, setIsMedicinesVisible] = useState<boolean>(false);

	const [liveData, setLiveData] = useState<ContactInterface>(data);
	const age = calculateAge(data.birthday);

	useEffect(() => {
		if (!isVisible || !liveData.id) return;

		const unsubscribe = listenIdosoChanges(data.id, (updatedData) => {
			if (updatedData) {
				setLiveData(updatedData as ContactInterface);
			}
		});

		return () => unsubscribe();
	}, [isVisible]);

	const { allergies, bloodType, medicines } = liveData.technical_sheet as TecnicalSheet;

	return (
		<>
			<View>
				<Modal animationType="slide" transparent={true} visible={isVisible}>
					<View style={styles.content}>
						<View style={styles.header}>
							<BackArrow onPress={onClose} />
						</View>
						<ScrollView
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.scrollViewContainer}
						>
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
							{/* <View style={styles.medicinesHeader}>
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
						</View> */}
							<Button text="Medicamentos em uso" onPress={() => setIsMedicinesVisible(true)} />
						</ScrollView>
					</View>
				</Modal>
			</View>
			<MedicinesInUseModal
				data={medicines}
				isVisible={isMedicinesVisible}
				onClose={() => setIsMedicinesVisible(false)}
			/>
		</>
	);
}
