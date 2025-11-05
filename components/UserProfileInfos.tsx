import { useThemeContext } from '@/contexts/ThemeContext';
import { fetchUserData } from '@/hooks/fetchUserData';
import { userProfileInfosStyles } from '@/styles/components/UserProfileInfosStyles';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const PlaceHolderImage = require('@/assets/images/placeholder-image.jpg');

interface UserProfileInfos {
	photo?: string;
}

export default function UserProfileInfos({ photo }: UserProfileInfos) {
	const { colors } = useThemeContext();
	const styles = userProfileInfosStyles(colors!);

	const [name, setName] = useState<string>('Nome');
	const [email, setEmail] = useState<string>('Email');
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getNameAndEmail = async () => {
			setLoading(true);
			try {
				const userData = await fetchUserData();
				if (!userData) {
					return null;
				}
				setName(userData!.name);
				setEmail(userData!.email);
			} catch (error: any) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getNameAndEmail();
	}, []);

	const imageSource = photo ? { uri: photo } : PlaceHolderImage;

	return (
		<View style={styles.container}>
			<Image source={imageSource} style={styles.photo} />
			<View style={styles.userCredentials}>
				{loading ? (
					<ActivityIndicator color={colors?.accentColor} size={'large'} />
				) : (
					<>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.email}>{email}</Text>
					</>
				)}
			</View>
		</View>
	);
}
