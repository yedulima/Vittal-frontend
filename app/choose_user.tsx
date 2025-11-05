import { LightTheme } from '@/constants/Themes';
import { chooseUserStyles } from '@/styles/screens/ChooseUserStyles';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import UserCard from '@/components/UserCard';

export default function ChooseUserScreen() {
	const styles = chooseUserStyles(LightTheme);

	const [userType, setUserType] = useState<string>('');

	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<ProgressBar percentage={25} />
			<Text style={styles.text}>Escolha o tipo de usuário</Text>
			<View style={styles.content}>
				<View style={styles.cardsContainer}>
					<UserCard
						title="👩‍⚕️ Sou Cuidador"
						description="Quero oferecer ajuda e cuidar de quem precisa com carinho e dedicação."
						onPress={() => setUserType('cuidador')}
						style={userType === 'cuidador' ? styles.selected : styles.unselected}
					/>
					<UserCard
						title="👴 Sou Idoso"
						description="Quero receber apoio e ter alguém por perto para me ajudar no dia a dia."
						onPress={() => setUserType('idoso')}
						style={userType === 'idoso' ? styles.selected : styles.unselected}
					/>
				</View>
				<View>
					<Button
						text="Selecionar"
						disabled={true}
						onPress={() => router.navigate('/register/[userType]')}
						style={styles.chooseButton}
						textStyle={styles.chooseText}
					/>
					<Button
						text="Voltar"
						onPress={() => router.back()}
						style={styles.backButton}
						textStyle={styles.backText}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}
