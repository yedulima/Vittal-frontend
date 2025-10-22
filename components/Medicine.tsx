import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import ThemedText from '@/components/ThemedText';

export type MedicineProps = TouchableOpacityProps & {
	title: string;
	description: string;
	hour: string;
	date: string;
	isView: boolean;
	onPress: () => void;
};

export default function Medicine({ title, description, hour, date, isView, onPress, style, ...rest }: MedicineProps) {
	const { primaryText, secondaryText, card, border } = useThemeColor();

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[{ backgroundColor: isView ? 'transparent' : card, borderColor: border }, styles.container, style]}
			activeOpacity={0.7}
			{...rest}
		>
			<View style={styles.infoContainer}>
				<View style={styles.textContainer}>
					<View style={styles.titleContainer}>
						<ThemedText text={title} type="defaultSemiBold" style={{ color: primaryText }} />
						<ThemedText text={hour} type="default" style={{ color: secondaryText }} />
					</View>
					<View style={styles.descriptionContainer}>
						<ThemedText text={description} type="default" style={{ color: secondaryText }} />
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 80,
		paddingHorizontal: 7,
		paddingBottom: 10,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 12,
	},
	textContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	titleContainer: {
		width: '97%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	descriptionContainer: {
		width: '97%',
		maxHeight: 40,
	},
});
