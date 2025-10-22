import { ThemeContext } from '@/contexts/ThemeContext';
import filter from 'lodash.filter';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Contact from '@/components/Contact';
import SearchBar from '@/components/SearchBar';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';
import ThemedText from '@/components/ThemedText';

export default function ContactsScreen() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>('');
	const [data, setData] = useState<any>();
	const [fullData, setFullData] = useState<any>();
	const [searchQuery, setSearchQuery] = useState<string>('');

	const { isDark } = useContext(ThemeContext);

	const dataVar = [
		{ id: 1, name: 'Eduardo Lima', status: 'Active' },
		{ id: 2, name: 'Miguel Ângelo', status: 'Inactive' },
		{ id: 3, name: 'Jonathan Fernandes', status: 'Inactive' },
		{ id: 4, name: 'Gabriela Farias', status: 'Active' },
		{ id: 5, name: 'Renata Feitosa', status: 'Active' },
	];

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		const formattedQUery = query.toLowerCase();
		const filteredData = filter(fullData, (user: any) => {
			const name = user.name.toLowerCase();
			return name.includes(formattedQUery);
		});
		setData(filteredData);
	};

	useEffect(() => {
		setIsLoading(false);
		setData(dataVar);
		setFullData(dataVar);
	}, []);

	return (
		<ThemedSafeAreaView>
			<ThemedText text="Contatos" type="title" style={styles.title} />
			<View style={styles.searchBarContainer}>
				<SearchBar
					placeholderText="Procurar contato"
					value={searchQuery}
					onChange={(query) => handleSearch(query)}
				/>
			</View>
			{isLoading ? (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator color={isDark ? '#fff' : '#0a84ff'} size={30} />
				</View>
			) : error ? (
				<ThemedText text="Error fetching data." type="default" style={{ alignSelf: 'center' }} />
			) : (
				<View style={styles.contactsContainer}>
					{data && data.length === 0 && searchQuery ? (
						<ThemedText
							text={`No matches for "${searchQuery}"`}
							type="default"
							style={{ alignSelf: 'center' }}
						/>
					) : (
						<FlatList
							data={data}
							keyExtractor={(item: any) => item.id.toString()}
							renderItem={({ item }: { item: any }) => (
								<Contact
									name={item.name}
									status={item.status === 'Active' ? 'Ativo' : 'Inativo'}
									onPress={() => {}}
								/>
							)}
						/>
					)}
				</View>
			)}
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		alignSelf: 'flex-start',
		marginBottom: 30,
	},
	searchBarContainer: {
		width: '100%',
		marginBottom: 25,
	},
	contactsContainer: {
		width: '100%',
	},
});
