import ThemedView from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TextInput, ViewProps } from 'react-native';

export type SearchBarProps = ViewProps & {
	placeholderText: string;
	value: string;
	onChange: (query: string) => void;
};

export default function SearchBar({ placeholderText, value, onChange, style, ...rest }: SearchBarProps) {
	const textColor = useThemeColor('textColor');
	const secondaryTextColor = useThemeColor('secondaryTextColor');
	const border = useThemeColor('border');

	return (
		<ThemedView style={[{}, styles.container, style]} {...rest}>
			<TextInput
				placeholder={placeholderText}
				clearButtonMode="always"
				placeholderTextColor={secondaryTextColor}
				autoCapitalize="none"
				autoCorrect={false}
				autoComplete="off"
				onChangeText={onChange}
				style={[{ color: textColor, borderColor: border }, styles.textInput]}
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
