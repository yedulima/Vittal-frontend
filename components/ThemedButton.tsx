import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import ThemedText, { TextType } from '@/components/ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
	text: string;
	onPress: () => void;
	subTitle?: string;
	leftIconName?: React.ComponentProps<typeof Ionicons>['name'];
	rightIconName?: React.ComponentProps<typeof Ionicons>['name'];
	buttonType?: 'default' | 'outlined';
	textType?: TextType;
	loading?: boolean;
};

export default function ThemedButton({
	text,
	subTitle,
	onPress,
	leftIconName,
	rightIconName,
	buttonType = 'default',
	textType,
	loading,
	style,
	...rest
}: ThemedButtonProps) {
	const { primaryText, secondaryText, button, border } = useThemeColor();

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				(rightIconName || leftIconName) && styles.iconButton,
				buttonType === 'default' ? { backgroundColor: button } : { borderColor: border },
				buttonType === 'default' ? styles.default : styles.outlined,
				styles.button,
				style,
			]}
			activeOpacity={0.9}
			{...rest}
		>
			{loading ? (
				<ActivityIndicator color={'#fff'} size={'small'} />
			) : (
				<>
					{leftIconName && <Ionicons name={leftIconName as any} size={19} color={primaryText} />}
					<View style={styles.textContainer}>
						<ThemedText text={text} type={textType ? textType : 'default'} />
						{subTitle && <ThemedText text={subTitle} type="small" style={{ color: secondaryText }} />}
					</View>
					{rightIconName && <Ionicons name={rightIconName as any} size={19} color={secondaryText} />}
				</>
			)}
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
	button: {
		height: 60,
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
});
