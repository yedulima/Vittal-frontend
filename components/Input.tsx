import { ThemeColors } from '@/constants/Themes';
import { useThemeContext } from '@/contexts/ThemeContext';
import { inputStyles } from '@/styles/components/InputStyles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface InputProps {
	title: string;
	placeHolder: string;
	value: string;
	onChange: (t: string) => void;
	isPassword?: boolean;
	styleColors?: ThemeColors;
}

export default function Input({ title, placeHolder, value, onChange, isPassword, styleColors }: InputProps) {
	const { colors } = useThemeContext();
	const styles = inputStyles(styleColors ? styleColors : colors!);

	const [show, setShow] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<View style={styles.inputContainer}>
				<TextInput
					value={value}
					onChangeText={onChange}
					placeholder={placeHolder}
					placeholderTextColor={colors?.accentColor}
					secureTextEntry={!show && isPassword}
					style={styles.textInput}
				/>
				{isPassword && (
					<TouchableOpacity onPress={() => setShow(!show)} activeOpacity={0.9}>
						<Feather name={show ? 'eye' : 'eye-off'} size={17} style={styles.icon} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}
