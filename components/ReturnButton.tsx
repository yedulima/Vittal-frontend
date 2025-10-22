import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function ReturnButton() {
	const { primaryText } = useThemeColor();

	const router = useRouter();

	return (
		<TouchableOpacity style={styles.returnButton} onPress={() => router.back()}>
			<Ionicons name="arrow-back" size={23} color={primaryText} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	returnButton: {
		alignSelf: 'flex-start',
		marginBottom: 10,
	},
});
