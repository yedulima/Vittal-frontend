import { LightTheme } from '@/constants/Themes';
import { userCardStyles } from '@/styles/components/UserCardStyles';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface UserCardProps {
	title: string;
	description: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
}

export default function UserCard({ title, description, onPress, style }: UserCardProps) {
	const styles = userCardStyles(LightTheme);

	return (
		<TouchableOpacity style={[styles.container, style]} activeOpacity={0.9} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</TouchableOpacity>
	);
}
