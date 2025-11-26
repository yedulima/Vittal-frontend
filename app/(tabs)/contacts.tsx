import { ContactInterface } from '@/api/interfaces';
import { listIdosos } from '@/api/services/cuidador.service';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactsStyles } from '@/styles/screens/ContactsStyles';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContactsList from '@/components/ContactsList';
import SearchBar from '@/components/SearchBar';
import AddIdosoModal from '@/components/modals/AddIdosoModal';

export default function ContactsScreen() {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = contactsStyles(colors, fontSize);

	const [data, setData] = useState<ContactInterface[]>([]);
	const [originalData, setOriginalData] = useState<ContactInterface[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const [isVisible, setIsVisible] = useState<boolean>(false);

	const fetchIdosos = async () => {
		const result = await listIdosos();
		const data = result?.data?.data || [];
		setOriginalData(data);
		setData(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchIdosos();
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
			{loading ? (
				<ActivityIndicator size={'large'} color={colors.textColor} />
			) : (
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
					<ContactsList data={data} />
				</ScrollView>
			)}

			<TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.8} style={styles.addContainer}>
				<Feather name="plus" size={30} style={styles.icon} />
			</TouchableOpacity>

			<AddIdosoModal isVisible={isVisible} onClose={() => setIsVisible(false)} onIdosoAdded={fetchIdosos} />
		</SafeAreaView>
	);
}
