import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { userProfileInfosStyles } from '@/styles/components/UserProfileInfosStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ImageSourcePropType, Text, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

export default function UserProfileInfos() {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = userProfileInfosStyles(colors, fontSize);

	let imageSource: ImageSourcePropType = PlaceHolderImage;

	if (user?.photoURL) {
		imageSource = { uri: user.photoURL };
	}

	return (
		<View style={styles.container}>
			<Image source={imageSource} style={styles.photo} />
			<View style={styles.userCredentials}>
				<Text style={styles.name}>{user?.displayName}</Text>
				<View style={styles.emailContainer}>
					<Text style={styles.email}>{user?.email}</Text>
					{user?.emailVerified && (
						<MaterialIcons name="verified-user" size={13} style={styles.verifiedBadge} />
					)}
				</View>
			</View>
		</View>
	);
}
