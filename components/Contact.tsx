import { ContactInterface } from '@/api/interfaces';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactStyles } from '@/styles/components/ContactStyles';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

interface ContactProp {
	data: ContactInterface;
}

export default function Contact({ data }: ContactProp) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = contactStyles(colors, fontSize);

	const router = useRouter();

	const imageSource = data.photoURL ? { uri: data.photoURL } : PlaceHolderImage;

	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => router.navigate(`/contact/${data.id}`)}
				activeOpacity={0.8}
			>
				<View style={styles.info}>
					<Image source={imageSource} style={styles.photo} />
					<View style={styles.userCredentials}>
						<Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
							{data.name}
						</Text>
						<Text style={styles.status}>{data.status}</Text>
					</View>
				</View>
				<Feather name="arrow-right" size={17} style={styles.icon} />
			</TouchableOpacity>
		</>
	);
}
