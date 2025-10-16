import { useThemeColor } from '@/hooks/useThemeColor';
import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

export type ThemedViewProp = ViewProps & {
	children: ReactNode;
};

export default function ThemedView({ children, style, ...rest }: ThemedViewProp) {
	const background = useThemeColor('background');

	return (
		<View style={[{ backgroundColor: background }, style]} {...rest}>
			{children}
		</View>
	);
}
