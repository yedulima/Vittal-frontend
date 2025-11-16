import { ContactInterface } from '@/api/interfaces';
import { listIdosos } from '@/api/services/cuidador.service';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactsStyles } from '@/styles/screens/ContactsStyles';
import { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContactsList from '@/components/ContactsList';
import SearchBar from '@/components/SearchBar';

export default function ContactsScreen() {
	const { colors } = useThemeContext();
	const styles = contactsStyles(colors!);

	const [data, setData] = useState<ContactInterface[]>([]);
	const [originalData, setOriginalData] = useState<ContactInterface[]>([]);

	useEffect(() => {
		const listar = async () => {
			const result = await listIdosos();
			const data = result?.data?.data || [];
			setOriginalData(data);
			setData(data);
		};
		listar();
	}, []);

	const onChangeQuery = (filteredData: ContactInterface[]) => {
		setData(filteredData);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Idosos</Text>
			<Text style={styles.text}>Contatos cadastrados</Text>
			<SearchBar
				placeholder="Procurar contato"
				dataToSearch={originalData}
				onChange={(filteredData: ContactInterface[]) => onChangeQuery(filteredData)}
			/>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<ContactsList data={data} />
			</ScrollView>
		</SafeAreaView>
	);
}
