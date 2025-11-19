import { useAuthContext } from '@/contexts/AuthContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { userPersonalInfosStyles } from '@/styles/components/UserPersonalInfosStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function UserPersonalInfos() {
	const { colors } = useThemeContext();
	const styles = userPersonalInfosStyles(colors!);

	const { user, userData } = useAuthContext();

	return (
		<View style={styles.optionsSectionContainer}>
			<View style={styles.header}>
				<Text style={styles.title}>Informações pessoais</Text>
				<TouchableOpacity activeOpacity={0.8}>
					<FontAwesome5 name="edit" size={16} style={styles.icon} />
				</TouchableOpacity>
			</View>
			<View>
				<View style={styles.container}>
					<View>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>Nome</Text>
						</View>
						<Text style={userData?.name ? styles.content : styles.noContent}>
							{userData?.name ? userData?.name : 'Nenhum nome de usuário'}
						</Text>
					</View>
					<View>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>Email</Text>
							{!user?.emailVerified && <Text style={styles.verifiedText}>(Não verificado)</Text>}
						</View>
						<Text style={userData?.email ? styles.content : styles.noContent}>
							{userData?.email ? userData?.email : 'Nenhum email de usuário'}
						</Text>
					</View>
					<View>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>Telefone</Text>
						</View>
						<Text style={userData?.phoneNumber ? styles.content : styles.noContent}>
							{userData?.phoneNumber ? userData?.phoneNumber : 'Nenhum email de usuário'}
						</Text>
					</View>
					<View>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>Data de nascimento</Text>
						</View>
						<Text style={userData?.birthday ? styles.content : styles.noContent}>
							{userData?.birthday ? userData?.birthday : 'Nenhum email de usuário'}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
