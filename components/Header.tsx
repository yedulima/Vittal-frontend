import { useThemeContext } from '@/contexts/ThemeContext';
import { fetchUserData } from '@/hooks/fetchUserData';
import { headerStyles } from '@/styles/components/HeaderStyles';
import { NOTIFICATIONS_LENGTH } from '@/utils/data';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

export default function Header() {
	const { colors } = useThemeContext();
	const styles = headerStyles(colors!);

	const [name, setName] = useState<string>('Nome');
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getName = async () => {
			setLoading(true);
			try {
				const userData = await fetchUserData();

				if (!userData) {
					return null;
				}

				let name = userData!.name.split(' ');
				name = `${name[0]} ${name.pop()}`;

				setName(name);
			} catch (error: any) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getName();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.userWelcomeContainer}>
					<Text style={styles.hourWelcomeText}>Boa noite,</Text>
					{loading ? (
						<ActivityIndicator color={colors?.accentColor} size={'small'} />
					) : (
						<Text style={styles.name}>{name}</Text>
					)}
				</View>
				<Image source={PlaceHolderImage} style={styles.photo} />
			</View>
			{NOTIFICATIONS_LENGTH > 0 && (
				<Text style={styles.adversimentMessage}>Você possui {NOTIFICATIONS_LENGTH} novas notificações</Text>
			)}
		</View>
	);
}
