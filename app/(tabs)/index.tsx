import { useThemeColor } from '@/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View } from 'react-native';

import Notification from '@/components/Notification';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function HomeScreen() {
	const { border, card, secondaryText } = useThemeColor();

	return (
		<ThemedSafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.welcomeBackContainer}>
					<ThemedText text="Boa noite," type="defaultSemiBold" />
					<ThemedText text="Eduardo" type="title" style={styles.name} />
					<ThemedText text="Hoje você tem 2 emergências e 1 alerta ativo" type='default' style={{ color: secondaryText }} />
				</View>
				<View>
					<View style={styles.cardsContainer}>
						<View style={[{ borderColor: border, backgroundColor: card }, styles.card]}>
							<MaterialIcons name="error" size={35} color="#ff4d4d" />
							<View>
								<ThemedText text="Emergências" type='defaultSemiBold' />
								<ThemedText text="1" type='subtitle'  />
							</View>
						</View>
						<View style={[{ borderColor: border, backgroundColor: card }, styles.card]}>
							<MaterialIcons name="warning" size={35} color="#ffcc00" />
							<View>
								<ThemedText text="Alertas" type='defaultSemiBold' />
								<ThemedText text="1" type='subtitle' />
							</View>
						</View>
						<View style={[{ borderColor: border, backgroundColor: card }, styles.card]}>
							<MaterialIcons name="schedule" size={35} color="#999" />
							<View>
								<ThemedText text="Pendentes" type='defaultSemiBold' />
								<ThemedText text="2" type='subtitle' />
							</View>
						</View>
						<View style={[{ borderColor: border, backgroundColor: card }, styles.card]}>
							<MaterialIcons name="person" size={35} color="#ccc" />
							<View>
								<ThemedText text="Idosos" type='defaultSemiBold' />
								<ThemedText text="5" type='subtitle' />
							</View>
						</View>
					</View>
				</View>
				<View style={styles.notificationsContainer}>
					<View style={styles.notificationsHeader}>
						<ThemedText text="Últimos notificações" type="subtitle" />
						<ThemedText text="Ver todas" type="light" color={secondaryText} />
					</View>
					<View>
						<Notification
							description="Ana não tomou o remédio da noite."
							type="Alerta de Medicamento"
							isView={true}
							date="15/07/2024 - 10:30"
							onPress={() => {}}
						/>
						<Notification
							description="Acionado por Gabriela Freitas."
							type="Alerta de SOS"
							isView={false}
							date="15/07/2024 - 10:30"
							onPress={() => {}}
						/>
						<Notification
							description="Já baixou os novos updates?"
							isView={false}
							date="15/07/2024 - 10:30"
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
		fontSize: 27,
		alignSelf: 'flex-start',
	},
	cardsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '48%',
		paddingVertical: 13,
		borderRadius: 15,
		borderWidth: 1.5,
		marginBottom: 15,
		gap: 2,
	},
	notificationsContainer: {
		gap: 15,
		marginBottom: 30,
	},
	notificationsHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
