import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TextInput, ViewProps } from 'react-native';

import ThemedView from '@/components/ThemedView';

export type SearchBarProps = ViewProps & {
	placeholderText: string;
	value: string;
	onChange: (query: string) => void;
};

export default function SearchBar({ placeholderText, value, onChange, style, ...rest }: SearchBarProps) {
	const { primaryText, secondaryText, border } = useThemeColor();

	return (
		<ThemedView style={[styles.container, style]} {...rest}>
			<TextInput
				placeholder={placeholderText}
				clearButtonMode="always"
				placeholderTextColor={secondaryText}
				autoCapitalize="none"
				autoCorrect={false}
				autoComplete="off"
				autoFocus={false}
				onChangeText={onChange}
				style={[{ color: primaryText, borderColor: border }, styles.textInput]}
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
