import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import { useThemeContext } from '@/contexts/ThemeContext';
import { buttonStyles } from '@/styles/components/ButtonStyles';

interface ButtonProps extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	leftIconName?: React.ComponentProps<typeof Feather>['name'];
	rightIconName?: React.ComponentProps<typeof Feather>['name'];
	iconColor?: string;
}

export default function Button({
	text,
	onPress,
	style,
	textStyle,
	leftIconName,
	rightIconName,
	iconColor,
	...others
}: ButtonProps) {
	const { colors } = useThemeContext();
	const styles = buttonStyles(colors);

	const iconFinalColor = iconColor || colors?.iconColor;
	const isUsingIcons = leftIconName || rightIconName;

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			style={[styles.container, { flexDirection: isUsingIcons ? 'row' : 'column' }, style]}
			{...others}
		>
			{leftIconName && <Feather name={leftIconName} size={18} color={iconFinalColor} />}
			<Text style={[styles.text, textStyle]}>{text}</Text>
			{rightIconName && <Feather name={rightIconName} size={18} color={iconFinalColor} />}
		</TouchableOpacity>
	);
}
