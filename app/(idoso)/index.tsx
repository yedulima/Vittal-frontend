import { FIREBASE_AUTH } from '@/FirebaseConfig';
import { useThemeColor } from '@/hooks/useThemeColor';
import { getUserData } from '@/utils/getUserData';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Medicine from '@/components/Medicine';
import Notification from '@/components/Notification';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function HomeScreen() {
	const [name, setName] = useState<string>('Username');
	const [loading, setLoading] = useState<boolean>(false);

	const { primaryText, secondaryText, emergency } = useThemeColor();

	const router = useRouter();

	useEffect(() => {
		const getNameAndEmail = async () => {
			setLoading(true);
			try {
				const currentUser = FIREBASE_AUTH.currentUser;
				const userId = currentUser?.uid;
				const userData = await getUserData(userId);

				if (!userData) {
					return null;
				}

				let name = userData!.name;
				name = name.trim().split(' ')[0];

				setName(name);
			} catch (error: any) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getNameAndEmail();
	}, []);

	return (
		<ThemedSafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.welcomeBackContainer}>
					<ThemedText text="Boa noite," type="defaultSemiBold" />
					{loading ? (
						<ActivityIndicator color={primaryText} size={25} style={{ alignSelf: 'flex-start' }} />
					) : (
						<ThemedText text={name} type="title" style={styles.name} />
					)}
					<ThemedText
						text="Hoje você tem 3 medicações a tomar"
						type="default"
						style={{ color: secondaryText }}
					/>
				</View>
				<View style={styles.emergencyButtonContainer}>
					<TouchableOpacity
						style={[{ backgroundColor: emergency }, styles.emergencyButton]}
						activeOpacity={0.9}
					>
						<FontAwesome name="warning" color="#fff" size={30} />
						<ThemedText text="SOS" type="title" color="#fff" />
						<ThemedText text="Emergência imediata" type="default" color="#fff" />
					</TouchableOpacity>
				</View>
				<View style={styles.sectionContainer}>
					<View style={styles.sectionHeader}>
						<ThemedText text="Medicamentos" type="subtitle" />
						<Pressable onPress={() => router.navigate('/medicines')}>
							<ThemedText text="Ver todos" type="light" color={secondaryText} />
						</Pressable>
					</View>
					<View>
						<Medicine
							title="Dipirona"
							description="50mg"
							hour="14:30"
							date="14/02/2007"
							isView={false}
							onPress={() => {}}
						/>
						<Medicine
							title="Nimesulida"
							description="80mg"
							hour="14:30"
							date="14/02/2007"
							isView={false}
							onPress={() => {}}
						/>
						<Medicine
							title="Paracetamol"
							description="30mg"
							hour="16:00"
							date="14/02/2007"
							isView={false}
							onPress={() => {}}
						/>
					</View>
				</View>
				<View style={styles.sectionContainer}>
					<View style={styles.sectionHeader}>
						<ThemedText text="Últimos notificações" type="subtitle" />
						<Pressable onPress={() => router.navigate('/notifications')}>
							<ThemedText text="Ver todas" type="light" color={secondaryText} />
						</Pressable>
					</View>
					<View>
						<Notification
							title="Alerta do cuidador"
							description="Cuidador enviou alerta."
							type="Alerta de SOS"
							isView={false}
							date="15/05/2024 - 11:00"
							onPress={() => {}}
						/>
					</View>
				</View>
			</ScrollView>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	welcomeBackContainer: {
		marginBottom: 30,
	},
	name: {
		alignSelf: 'flex-start',
		marginBottom: 8,
	},
	emergencyButtonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	emergencyButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 15,
		borderRadius: 15,
	},
	sectionContainer: {
		gap: 15,
		marginBottom: 15,
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
