import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { backArrowStyles } from '@/styles/components/BackArrow';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

interface BackArrorProps {
	onPress?: () => void;
}

export default function BackArrow({ onPress }: BackArrorProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = backArrowStyles(colors, fontSize);

	const router = useRouter();
	const action = () => (onPress ? onPress() : router.back());

	return (
		<TouchableOpacity activeOpacity={0.9} onPress={action} style={styles.container}>
			<Feather name="arrow-left" size={fontSize.iconSize + 3} style={styles.icon} />
			<Text style={styles.text}>Voltar</Text>
		</TouchableOpacity>
	);
}
