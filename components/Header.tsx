import { NotificationInterface } from '@/api/interfaces';
import { listenForNotifications } from '@/api/services/notification.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { headerStyles } from '@/styles/components/HeaderStyles';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

export default function Header() {
	const { user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = headerStyles(colors, fontSize);

	const [notificationsLenght, setNotificationsLenght] = useState<number>();

	useEffect(() => {
		const unsubscribe = listenForNotifications(user?.uid as string, (newNotifications: NotificationInterface[]) => {
			const filteredNotifications = newNotifications.filter((noti) => !noti.read);
			setNotificationsLenght(filteredNotifications.length);
		});

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
		};
	}, []);

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
			{!!notificationsLenght && (
				<Text style={styles.adversimentMessage}>Você possui {notificationsLenght} novas notificações</Text>
			)}
		</View>
	);
}
