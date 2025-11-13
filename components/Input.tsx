import { ThemeColors } from '@/constants/Themes';
import { useThemeContext } from '@/contexts/ThemeContext';
import { inputStyles } from '@/styles/components/InputStyles';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardType, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
	title: string;
	placeHolder: string;
	value: string;
	onChangeText: (t: string) => void;
	rightIcon?: React.ComponentProps<typeof Feather>['name'];
	rightIconPress?: () => void;
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
	rightIcon,
	rightIconPress,
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
				{rightIcon && (
					<TouchableOpacity
						onPress={() => {
							rightIconPress?.();
						}}
						style={styles.pressOpacity}
						activeOpacity={rightIconPress ? 0.9 : 1}
					>
						<Feather name={rightIcon} size={17} style={styles.icon} />
					</TouchableOpacity>
				)}
				{isPassword && (
					<TouchableOpacity onPress={() => setShow(!show)} style={styles.pressOpacity} activeOpacity={0.9}>
						<Feather name={show ? 'eye' : 'eye-off'} size={17} style={styles.icon} />
					</TouchableOpacity>
				)}
			</View>
			{errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
		</View>
	);
}
