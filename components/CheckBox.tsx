import ThemedText from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableHighlightProps, TouchableOpacity } from 'react-native';

export type CheckBoxProps = TouchableHighlightProps & {
	title: string;
	onChange: () => void;
	value: boolean;
};

export default function CheckBox({ title, onChange, value, style, ...rest }: CheckBoxProps) {
	const textColor = useThemeColor('textColor');

	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onChange} activeOpacity={0.9}>
			<ThemedText text={title} style={styles.text} />
			<Ionicons name={value ? 'checkbox' : 'checkbox-outline'} size={22} color={textColor} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
	},
});
