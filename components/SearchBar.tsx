import { useThemeContext } from '@/contexts/ThemeContext';
import { searchBarStyles } from '@/styles/components/SearchBarStyles';
import { USERS, UserInterface } from '@/utils/data';
import { useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';

import filter from 'lodash.filter';

interface SearchBarProps {
	placeholder: string;
	onChange: (filteredData: UserInterface[]) => void;
}

export default function SearchBar({ placeholder, onChange }: SearchBarProps) {
	const { colors } = useThemeContext();
	const styles = searchBarStyles(colors!);

	const [query, setQuery] = useState<string>('');

	const handleSearch = (query: string) => {
		setQuery(query);
	};

	useMemo(() => {
		let result: UserInterface[];

		if (!query) {
			result = USERS as UserInterface[];
		}
		const formattedQuery = query.toLowerCase();
		result = filter(USERS, (user: UserInterface) => {
			const name = user.name.toLowerCase();
			return name.includes(formattedQuery);
		}) as UserInterface[];

		onChange(result);
		return result;
	}, [query]);

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
