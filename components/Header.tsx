import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { headerStyles } from '@/styles/components/HeaderStyles';
import { NOTIFICATIONS_LENGTH } from '@/utils/data';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

export default function Header() {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = headerStyles(colors, fontSize);

	const [name] = useState<string>(() => {
		let name = user?.displayName?.split(' ');
		return `${name?.[0]} ${name?.pop()}`;
	});

	let profilePhotoImage: ImageSourcePropType = PlaceHolderImage;

	if (user?.photoURL) {
		profilePhotoImage = { uri: user.photoURL };
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.userWelcomeContainer}>
					<Text style={styles.hourWelcomeText}>Boa noite,</Text>
					<Text style={styles.name}>{name}</Text>
				</View>
				<Image source={profilePhotoImage} style={styles.photo} />
			</View>
			{NOTIFICATIONS_LENGTH > 0 && (
				<Text style={styles.adversimentMessage}>Você possui {NOTIFICATIONS_LENGTH} novas notificações</Text>
			)}
		</View>
	);
}
