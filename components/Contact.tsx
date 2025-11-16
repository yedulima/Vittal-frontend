import { useThemeContext } from '@/contexts/ThemeContext';
import { contactStyles } from '@/styles/components/ContactStyles';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import { ContactInterface } from '@/api/interfaces';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

interface ContactProp {
	data: ContactInterface;
}

export default function Contact({ data }: ContactProp) {
	const { colors } = useThemeContext();
	const styles = contactStyles(colors!);

	const imageSource = data.photoURL ? { uri: data.photoURL } : PlaceHolderImage;

	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.8}>
			<View style={styles.info}>
				<Image source={imageSource} style={styles.photo} />
				<View style={styles.userCredentials}>
					<Text style={styles.name}>{data.name}</Text>
					<Text style={styles.status}>{data.status}</Text>
				</View>
			</View>
			<Feather name="arrow-right" size={17} style={styles.icon} />
		</TouchableOpacity>
	);
}
