import { ThemeColors } from '@/constants/Themes';
import { useThemeContext } from '@/contexts/ThemeContext';
import { userProfilePhotoStyles } from '@/styles/components/UserProfilePhotoStyles';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType, TouchableOpacity, View } from 'react-native';

interface UserProfilePhotoProps {
	imgSource: ImageSourcePropType;
	onPress?: () => void;
	onImageChoiced?: (uri: string) => void;
	styleColors?: ThemeColors;
}

export default function UserProfilePhoto({ imgSource, onPress, onImageChoiced, styleColors }: UserProfilePhotoProps) {
	const { colors } = useThemeContext();
	const styles = userProfilePhotoStyles(styleColors ? styleColors : colors);

	const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

	let imageSource: ImageSourcePropType = imgSource;

	if (selectedImage) {
		imageSource = { uri: selectedImage };
	} else if (typeof imgSource === 'string') {
		imageSource = { uri: imgSource };
	}

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: false,
			quality: 1,
		});

		if (!result.canceled) {
			const uri = result.assets[0].uri;
			setSelectedImage(uri);
			onImageChoiced?.(uri!);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image source={imageSource} style={styles.photo} />
				<TouchableOpacity
					onPress={() => {
						pickImageAsync();
						onPress?.();
					}}
					style={styles.selectButton}
					activeOpacity={0.8}
				>
					<Ionicons name="add" size={20} style={styles.icon} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
