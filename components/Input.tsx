import { ThemeColors } from '@/constants/Themes';
import { useThemeContext } from '@/contexts/ThemeContext';
import { inputStyles } from '@/styles/components/InputStyles';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { KeyboardType, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
	title: string;
	placeHolder: string;
	value: string;
	onChangeText: (t: string) => void;
	errorMessage?: string;
	isPassword?: boolean;
	keyType?: KeyboardType;
	styleColors?: ThemeColors;
}

export default function Input({
	title,
	placeHolder,
	value,
	onChangeText,
	errorMessage,
	isPassword,
	keyType,
	styleColors,
	...others
}: InputProps) {
	const { colors } = useThemeContext();
	const styles = inputStyles(styleColors ? styleColors : colors!);

	const [show, setShow] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<View style={styles.inputContainer}>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					placeholder={placeHolder}
					placeholderTextColor={colors?.accentColor}
					secureTextEntry={!show && isPassword}
					style={styles.textInput}
					keyboardType={keyType}
					{...others}
				/>
				{isPassword && (
					<TouchableOpacity onPress={() => setShow(!show)} activeOpacity={0.9}>
						<Feather name={show ? 'eye' : 'eye-off'} size={17} style={styles.icon} />
					</TouchableOpacity>
				)}
			</View>
			{errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
		</View>
	);
}
