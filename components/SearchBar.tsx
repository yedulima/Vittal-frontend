import { useThemeContext } from '@/contexts/ThemeContext';
import { searchBarStyles } from '@/styles/components/SearchBarStyles';
import { useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { ContactInterface } from '@/api/interfaces';

import filter from 'lodash.filter';

interface SearchBarProps {
	placeholder: string;
	dataToSearch: ContactInterface[];
	onChange: (filteredData: ContactInterface[]) => void;
}

export default function SearchBar({ placeholder, dataToSearch, onChange }: SearchBarProps) {
	const { colors } = useThemeContext();
	const styles = searchBarStyles(colors);

	const [query, setQuery] = useState<string>('');

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	useMemo(() => {
		let result: ContactInterface[];

		if (!query) {
			result = dataToSearch;
		}
		const formattedQuery = query.toLowerCase();
		result = filter(dataToSearch, (user: ContactInterface) => {
			const name = user.name.toLowerCase();
			return name.includes(formattedQuery);
		}) as ContactInterface[];

		onChange(result);
		return result;
	}, [query, dataToSearch]);

	return (
		<View style={styles.container}>
			<TextInput
				value={query}
				placeholder={placeholder}
				placeholderTextColor={colors?.accentColor}
				clearButtonMode="while-editing"
				onChangeText={handleSearch}
				style={styles.textInput}
			/>
		</View>
	);
}
