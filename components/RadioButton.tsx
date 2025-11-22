import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { radioButtonStyles } from '@/styles/components/RadioButtonStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export interface RadioButtonProps {
	title: string;
	onPress: () => void;
	isActive: boolean;
	description?: string;
}

export default function RadioButton({ title, onPress, isActive, description }: RadioButtonProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = radioButtonStyles(colors, fontSize);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, isActive && styles.active]}>
			<MaterialIcons
				name={isActive ? 'radio-button-checked' : 'radio-button-unchecked'}
				size={fontSize.iconSize + 3}
				style={isActive ? styles.checked : styles.unchecked}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				{description && <Text style={styles.description}>{description}</Text>}
			</View>
		</TouchableOpacity>
	);
}
