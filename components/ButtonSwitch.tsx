import ThemedText from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Switch, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ButtonSwitchProps = TouchableOpacityProps & {
	text: string;
	onPress: () => void;
	value: boolean;
};

export default function ButtonSwitch({ text, onPress, value, style }: ButtonSwitchProps) {
	const button = useThemeColor('button');

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[{ backgroundColor: button }, styles.button, style]}
			activeOpacity={0.9}
		>
			<ThemedText text={text} />
			<Switch value={value} trackColor={{ false: '#d1d1d1ff', true: '#494949ff' }} activeThumbColor="#fff" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 16,
		borderRadius: 6,
	},
});
