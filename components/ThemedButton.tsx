import ThemedText from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

export type ThemedButtonProps = TouchableOpacityProps & {
	text: string;
	onPress: () => void;
	secondaryText?: string;
	leftIconName?: React.ComponentProps<typeof Ionicons>['name'];
	rightIconName?: React.ComponentProps<typeof Ionicons>['name'];
	type?: 'default' | 'outlined';
	textType?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export default function ThemedButton({
	text,
	secondaryText,
	onPress,
	leftIconName,
	rightIconName,
	type = 'default',
	textType,
	style,
	...rest
}: ThemedButtonProps) {
	const button = useThemeColor('button');
	const border = useThemeColor('border');
    const textColor = useThemeColor('textColor');
	const secondaryTextColor = useThemeColor('secondaryTextColor');

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				(rightIconName || leftIconName) && styles.iconButton,
				type === 'default' ? { backgroundColor: button } : { borderColor: border },
				type === 'default' ? styles.default : styles.outlined,
				style,
			]}
			activeOpacity={0.9}
			{...rest}
		>
			{leftIconName && <Ionicons name={leftIconName as any} size={19} color={textColor} />}
			<View style={styles.textContainer}>
				<ThemedText text={text} type={textType} />
				{secondaryText && (
					<ThemedText text={secondaryText} style={[{ color: secondaryTextColor }, styles.secondaryText]} />
				)}
			</View>
			{rightIconName && <Ionicons name={rightIconName as any} size={19} color={secondaryTextColor} />}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	default: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: 16,
		borderRadius: 6,
	},
	outlined: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: 16,
		borderRadius: 6,
		borderWidth: 4,
	},
	iconButton: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 17,
		gap: 10,
	},
	textContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	secondaryText: {
		fontSize: 12,
	},
});
