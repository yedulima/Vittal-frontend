import { useThemeColor } from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ReturnButton from '@/components/ReturnButton';
import ThemedButton from '@/components/ThemedButton';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function RegisterScreen() {
	const { primaryText, secondaryText, border, card, active, button } = useThemeColor();
	const [choice, setChoice] = useState<string>('');

	const router = useRouter();

	const handleSelect = () => {
		if (choice === 'Cuidador') {
			router.push('/register/cuidador');
			return;
		}
		router.push('/register/idoso');
	};

	return (
		<ThemedSafeAreaView style={styles.container}>
			<View style={styles.containerTop}>
				<ReturnButton />
				<ThemedText text="Escolha seu tipo de usuário:" type="subtitle" />
				<View style={styles.cardContainer}>
					<TouchableOpacity
						style={[
							{
								backgroundColor: choice === 'Cuidador' ? active : card,
								borderColor: choice === 'Cuidador' ? active : border,
							},
							styles.card,
						]}
						activeOpacity={0.8}
						onPress={() => setChoice('Cuidador')}
					>
						<ThemedText text="👩‍⚕️ Sou Cuidador" type="subtitle" />
						<ThemedText
							text="Quero oferecer ajuda e cuidar de quem precisa com carinho e dedicação."
							type="default"
							color={choice === 'Cuidador' ? primaryText : secondaryText}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							{
								backgroundColor: choice === 'Idoso' ? active : card,
								borderColor: choice === 'Idoso' ? active : border,
							},
							styles.card,
						]}
						activeOpacity={0.8}
						onPress={() => setChoice('Idoso')}
					>
						<ThemedText text="👴 Sou Idoso" type="subtitle" />
						<ThemedText
							text="Quero receber apoio e ter alguém por perto para me ajudar no dia a dia."
							type="default"
							color={choice === 'Idoso' ? primaryText : secondaryText}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.containerBottom}>
				<ThemedButton
					text="Selecionar"
					textType="defaultSemiBold"
					disabled={choice ? false : true}
					onPress={handleSelect}
					style={{ backgroundColor: choice ? active : button }}
				/>
			</View>
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	containerTop: {
		width: '100%',
	},
	cardContainer: {
		gap: 15,
		marginTop: 20,
	},
	card: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingVertical: 20,
		paddingHorizontal: 20,
		width: '100%',
		borderWidth: 2,
		borderRadius: 15,
		gap: 10,
	},
	containerBottom: {
		width: '100%',
		paddingBottom: 30,
	},
});
