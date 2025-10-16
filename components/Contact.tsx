import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import ProfilePhoto from '@/components/ProfilePhoto';
import ThemedText from '@/components/ThemedText';

export type ContactProps = TouchableOpacityProps & {
	name: string;
	status: 'Active' | 'Inactive';
	onPress: () => void;
};

const PlaceholderImage = require('@/assets/images/placeholder-image.png');

export default function Contact({ name, status, onPress, style, ...rest }: ContactProps) {
	const button = useThemeColor('button');
	const secondaryTextColor = useThemeColor('secondaryTextColor');

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[{ borderBottomColor: button }, styles.container, style]}
			activeOpacity={0.7}
			{...rest}
		>
			<View style={styles.userInfoContainer}>
				<ProfilePhoto imgSource={PlaceholderImage} style={styles.profilePhoto} />
				<View style={styles.textContainer}>
					<ThemedText text={name} style={styles.name} />
					<ThemedText text={status} style={[{ color: secondaryTextColor }, styles.status]} />
				</View>
			</View>
			<Ionicons name="arrow-forward" size={19} color={secondaryTextColor} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 60,
		paddingHorizontal: 7,
		paddingBottom: 10,
		borderBottomWidth: 2,
		marginBottom: 10,
	},
	userInfoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 12,
	},
	profilePhoto: {
		width: 45,
		height: 45,
	},
	textContainer: {
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	name: {
		fontSize: 16,
		fontWeight: 'semibold',
	},
	status: {
		fontSize: 12,
		fontWeight: 'light',
	},
});
