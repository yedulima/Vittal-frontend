import { useThemeContext } from '@/contexts/ThemeContext';
import { contactsStyles } from '@/styles/screens/ContactsStyles';
import { UserInterface } from '@/utils/data';
import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContactsList from '@/components/ContactsList';
import SearchBar from '@/components/SearchBar';

export default function ContactsScreen() {
	const { colors } = useThemeContext();
	const styles = contactsStyles(colors!);

	const [data, setData] = useState<UserInterface[]>([]);

	const onChangeQuery = (filteredData: UserInterface[]) => {
		setData(filteredData);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Idosos</Text>
			<Text style={styles.text}>Contatos cadastrados</Text>
			<SearchBar
				placeholder="Procurar contato"
				onChange={(filteredData: UserInterface[]) => onChangeQuery(filteredData)}
			/>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<ContactsList data={data} />
			</ScrollView>
		</SafeAreaView>
	);
}
