import { useThemeContext } from '@/contexts/ThemeContext';
import { StyleProp, Switch, SwitchProps, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { switchButtonStyles } from '@/styles/components/SwtichButtonStyles';

interface SwitchButtonProps extends SwitchProps {
	text: string;
	onPress: () => void;
	value: boolean;
	style?: StyleProp<ViewStyle>;
}

export default function SwitchButton({ text, onPress, value, style }: SwitchButtonProps) {
	const { colors } = useThemeContext();
	const styles = switchButtonStyles(colors);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, style]}>
			<Text style={styles.text}>{text}</Text>
			<Switch
				value={value}
				trackColor={{ true: colors!.trackActiveColor, false: colors!.trackInactiveColor }}
				activeThumbColor="#fff"
			/>
		</TouchableOpacity>
	);
}
