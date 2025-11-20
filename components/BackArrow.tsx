import { useThemeContext } from '@/contexts/ThemeContext';
import { backArrowStyles } from '@/styles/components/BackArrow';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export default function BackArrow() {
	const { colors } = useThemeContext();
	const styles = backArrowStyles(colors);

	const router = useRouter();

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={() => router.back()} style={styles.container}>
			<Feather name="arrow-left" size={20} style={styles.icon} />
			<Text style={styles.text}>Voltar</Text>
		</TouchableOpacity>
	);
}
