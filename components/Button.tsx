import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { buttonStyles } from '@/styles/components/ButtonStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
	subText?: string;
	caption?: string;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	captionStyle?: StyleProp<TextStyle>;
	leftIconName?: React.ComponentProps<typeof Feather>['name'];
	rightIconName?: React.ComponentProps<typeof Feather>['name'];
	iconColor?: string;
}

export default function Button({
	text,
	onPress,
	subText,
	caption,
	style,
	textStyle,
	captionStyle,
	leftIconName,
	rightIconName,
	iconColor,
	...others
}: ButtonProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = buttonStyles(colors, fontSize);

	const iconFinalColor = iconColor || colors?.iconColor;
	const isUsingIcons = leftIconName || rightIconName;

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={onPress}
			style={[styles.container, { flexDirection: isUsingIcons ? 'row' : 'column' }, style]}
			{...others}
		>
			{leftIconName && <Feather name={leftIconName} size={fontSize.iconSize} color={iconFinalColor} />}
			<View
				style={[
					styles.textContainer,
					{ flexDirection: caption ? 'column' : 'row', justifyContent: caption ? 'center' : 'flex-start' },
				]}
			>
				<Text style={[styles.text, textStyle]}>{text}</Text>
				{caption && <Text style={[styles.caption, captionStyle]}>{caption}</Text>}
				{subText && <Text style={styles.caption}>{subText}</Text>}
			</View>
			{rightIconName && <Feather name={rightIconName} size={fontSize.iconSize} color={iconFinalColor} />}
		</TouchableOpacity>
	);
}
