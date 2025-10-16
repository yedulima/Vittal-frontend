import { Image, ImageProps } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

export type ProfilePhotoProps = ImageProps & {
	imgSource: ImageSourcePropType;
};

export default function ProfilePhoto({ imgSource, style, ...rest }: ProfilePhotoProps) {
	return <Image source={imgSource} contentFit="contain" style={[styles.photo, style]} {...rest} />;
}

const styles = StyleSheet.create({
	photo: {
		width: 80,
		height: 80,
		borderRadius: 100,
	},
});
