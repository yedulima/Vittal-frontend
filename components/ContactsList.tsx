import { ContactInterface } from '@/api/interfaces';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactsListStyles } from '@/styles/components/ContactsListStyles';
import { FlatList, Text, View } from 'react-native';

import Contact from '@/components/Contact';

interface ContactListProp {
	data: ContactInterface[];
}

export default function ContactsList({ data }: ContactListProp) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = contactsListStyles(colors, fontSize);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Contact data={item} />}
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListEmptyComponent={() => (
					<View style={styles.noDataContainer}>
						<Text style={styles.text}>Nenhum usuário encontrado</Text>
					</View>
				)}
			/>
		</View>
	);
}
