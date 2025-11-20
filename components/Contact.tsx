import { ContactInterface } from '@/api/interfaces';
import { useThemeContext } from '@/contexts/ThemeContext';
import { contactStyles } from '@/styles/components/ContactStyles';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import IdosoProfileModal from './modals/IdosoProfileModal';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

interface ContactProp {
	data: ContactInterface;
}

export default function Contact({ data }: ContactProp) {
	const { colors } = useThemeContext();
	const styles = contactStyles(colors);

	const [isVisible, setIsVisible] = useState<boolean>(false);

	const imageSource = data.photoURL ? { uri: data.photoURL } : PlaceHolderImage;

	return (
		<>
			<TouchableOpacity style={styles.container} onPress={() => setIsVisible(true)} activeOpacity={0.8}>
				<View style={styles.info}>
					<Image source={imageSource} style={styles.photo} />
					<View style={styles.userCredentials}>
						<Text style={styles.name}>{data.name}</Text>
						<Text style={styles.status}>{data.status}</Text>
					</View>
				</View>
				<Feather name="arrow-right" size={17} style={styles.icon} />
			</TouchableOpacity>
			<IdosoProfileModal data={data} isVisible={isVisible} onClose={() => setIsVisible(false)} />
		</>
	);
}
