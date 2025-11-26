import { FullContactInterface, TecnicalSheet } from '@/api/interfaces';
import { getIdosoById, listenIdosoChanges } from '@/api/services/idoso.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactStyles } from '@/styles/screens/ContactStyles';
import { calculateAge } from '@/utils/calculateAge';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BackArrow from '@/components/BackArrow';
import Button from '@/components/Button';
import ProfileSection from '@/components/ProfileSection';
import WriteNotificationModal from '@/components/modals/WriteNotificationModal';

export default function IdosoProfile() {
	const { user } = useAuthContext();
	const { contactId } = useLocalSearchParams();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = contactStyles(colors, fontSize);

	const router = useRouter();

	const [data, setData] = useState<FullContactInterface | null>(null);
	const [liveData, setLiveData] = useState<FullContactInterface | null>(null);

	const [loading, setLoading] = useState<boolean>(true);

	const [isVisibleWriteNotification, setIsVisibleWriteNotification] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const idosoData = await getIdosoById(contactId as string);

				const fullData = idosoData.data.data;

				setData(fullData);
				setLiveData(fullData);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [contactId]);

	useEffect(() => {
		if (!liveData?.id) return;

		const idosoId = data?.id;

		const unsubscribe = listenIdosoChanges(idosoId!, (updatedData) => {
			if (updatedData) {
				setLiveData(updatedData as FullContactInterface);
			}
		});

		return () => unsubscribe();
	}, []);

	if (loading || !data || !liveData) {
		return (
			<SafeAreaView style={styles.container}>
				<View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
					<ActivityIndicator size="large" color={colors.textColor} />
				</View>
			</SafeAreaView>
		);
	}

	const age = calculateAge(data?.birthday!);
	const { allergies, bloodType } = liveData?.technical_sheet as TecnicalSheet;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<BackArrow />
			</View>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.profileHeader}>
					<Image source={data?.photoURL} style={styles.profilePhoto} />
					<Text style={styles.name}>{data?.name}</Text>
					<Text style={styles.age}>{`${age} anos`}</Text>
				</View>
				<ProfileSection
					title="Informações Básicas"
					items={[
						{ name: 'Data de nascimento', content: data?.birthday! },
						{ name: 'Telefone', content: data?.phoneNumber! as string, canCopy: true },
						{ name: 'E-mail', content: data?.email!, canCopy: true },
						{
							name: 'Endereço',
							onEdit: () => {},
							content: liveData?.address as string,
							canCopy: !!liveData?.address,
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
				<Button
					text="Medicamentos em uso"
					onPress={() => router.navigate(`/contact/${contactId}/medications`)}
					rightIconName="arrow-right"
					style={styles.button}
					textStyle={styles.buttonText}
				/>
				<Button
					text="Enviar notificação"
					onPress={() => setIsVisibleWriteNotification(true)}
					rightIconName="arrow-right"
					style={styles.button}
					textStyle={styles.buttonText}
				/>
			</ScrollView>
			<WriteNotificationModal
				senderId={user?.uid as string}
				destUserId={contactId as string}
				isVisible={isVisibleWriteNotification}
				onClose={() => setIsVisibleWriteNotification(false)}
			/>
		</SafeAreaView>
	);
}
