import { useThemeColor } from '@/hooks/useThemeColor';
import { KeyboardType, StyleSheet, TextInput, TextInputProps, ViewProps } from 'react-native';

import ThemedView from '@/components/ThemedView';

export type SearchBarProps = TextInputProps & ViewProps & {
    value: string;
	onChange: (text: string) => void;
	placeholderText?: string;
	type?: KeyboardType;
};

export default function ThemedInput({
	placeholderText,
	value,
	onChange,
	type = 'default',
	style,
	...rest
}: SearchBarProps) {
	const { primaryText, secondaryText, border } = useThemeColor();

	return (
		<ThemedView style={[styles.container, style]}>
			<TextInput
				placeholder={placeholderText}
				clearButtonMode="never"
				placeholderTextColor={secondaryText}
				autoCapitalize="none"
				autoCorrect={false}
				autoComplete="off"
				keyboardType={type}
				onChangeText={onChange}
				style={[{ color: primaryText, borderColor: border }, styles.textInput]}
				{...rest}
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	textInput: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderWidth: 1,
		borderRadius: 8,
	},
});
