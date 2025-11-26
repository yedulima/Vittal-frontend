import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { profileSectionStyles } from '@/styles/components/ProfileSectionStyles';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Alert, FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';

type SectionItem = {
	name: string;
	content: string | Array<string> | null;
	canCopy?: boolean;
	onEdit?: () => void;
};

interface ProfileSectionProps {
	title: string;
	items: SectionItem[];
}

export default function ProfileSection({ title, items }: ProfileSectionProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = profileSectionStyles(colors, fontSize);

	const copyToClipboard = async (title: string, text: string) => {
		await Clipboard.setStringAsync(text);
		Alert.alert(`${title} foi copiado!`);
		alert(`${title} foi copiado!`);
	};

	const NameHeader = ({ item }: { item: SectionItem }) => (
		<View style={styles.nameContainer}>
			<Text style={styles.name}>{item.name}</Text>
			{item.onEdit && (
				<TouchableOpacity onPress={item.onEdit} activeOpacity={0.8}>
					<FontAwesome5 name="edit" size={fontSize.iconSize} style={styles.icon} />
				</TouchableOpacity>
			)}
		</View>
	);

	const renderItem = ({ item }: ListRenderItemInfo<SectionItem>) => {
		if (Array.isArray(item.content)) {
			return (
				<View>
					<NameHeader item={item} />
					<View style={styles.multiplesItemsContainer}>
						{item.content.map((element, index) => (
							<View key={index} style={styles.multiplesItemsItem}>
								<Text style={styles.multiplesItemsText}>{element}</Text>
							</View>
						))}
					</View>
				</View>
			);
		}

		if (item.canCopy && typeof item.content === 'string') {
			return (
				<View>
					<NameHeader item={item} />
					<TouchableOpacity
						onPress={() => copyToClipboard(item.name, item.content as string)}
						style={styles.copyContainer}
						activeOpacity={0.9}
					>
						<Text style={styles.content}>{item.content}</Text>
						<Feather name="copy" size={fontSize.iconSize} style={styles.icon} />
					</TouchableOpacity>
				</View>
			);
		}

		return (
			<View>
				<NameHeader item={item} />
				<Text style={item.content ? styles.content : styles.noContent}>
					{item.content ? item.content : `Nenhum ${item.name.toLocaleLowerCase()} cadastrado ainda`}
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={items}
				keyExtractor={(item) => item.name}
				renderItem={renderItem}
				contentContainerStyle={styles.sectionContent}
				scrollEnabled={false}
			/>
		</View>
	);
}
