import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';
import { KeyboardType, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, ViewProps } from 'react-native';

import ThemedView from '@/components/ThemedView';

import { Ionicons } from '@expo/vector-icons';

export type SearchBarProps = TextInputProps &
	ViewProps & {
		value: string;
		onChange: (text: string) => void;
		placeholderText?: string;
		inputType?: KeyboardType;
		type?: 'default' | 'password';
	};

export default function ThemedInput({
	placeholderText,
	value,
	onChange,
	inputType = 'default',
	type = 'default',
	style,
	...rest
}: SearchBarProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	const { primaryText, secondaryText, border } = useThemeColor();

	const isPassword = type === 'password';
	const secureTextEntryValue = isPassword && !isPasswordVisible;
	const iconName = isPasswordVisible ? 'eye-off-outline' : 'eye-outline';

	return (
		<ThemedView style={[styles.container, style]}>
			<View style={[styles.inputWrapper, { borderColor: border }]}>
				<TextInput
					placeholder={placeholderText}
					value={value}
					clearButtonMode="never"
					placeholderTextColor={secondaryText}
					autoCapitalize="none"
					autoCorrect={false}
					autoComplete="off"
					keyboardType={inputType}
					onChangeText={onChange}
					secureTextEntry={secureTextEntryValue}
					style={[{ color: primaryText }, styles.textInput, isPassword && styles.passwordInput]}
					{...rest}
				/>

				{isPassword && (
					<TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeButton}>
						<Ionicons name={iconName as any} size={20} color={secondaryText} />
					</TouchableOpacity>
				)}
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		paddingVertical: 4,
	},
	textInput: {
		flex: 1,
		paddingVertical: 6,
	},
	passwordInput: {
		paddingRight: 10,
	},
	eyeButton: {
		padding: 5,
		marginLeft: 5,
	},
});
