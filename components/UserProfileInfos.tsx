import { useAuthContext } from '@/contexts/AuthContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { userProfileInfosStyles } from '@/styles/components/UserProfileInfosStyles';
import { ImageSourcePropType, Text, View } from 'react-native';

import UserProfilePhoto from '@/components/UserProfilePhoto';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

export default function UserProfileInfos() {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const styles = userProfileInfosStyles(colors!);

	let imageSource: ImageSourcePropType = PlaceHolderImage;

	if (user?.photoURL) {
		imageSource = { uri: user.photoURL };
	}

	return (
		<View style={styles.container}>
			<UserProfilePhoto imgSource={imageSource} />
			<View style={styles.userCredentials}>
				<Text style={styles.name}>{user?.displayName}</Text>
				<Text style={styles.email}>{user?.email}</Text>
			</View>
		</View>
	);
}
