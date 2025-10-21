import { useThemeColor } from '@/hooks/useThemeColor';
import { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProp = ViewProps & {
	children: ReactNode;
};

export default function ThemedSafeAreaView({ children, style, ...rest }: ThemedViewProp) {
	const { background } = useThemeColor();
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				{ backgroundColor: background, paddingTop: insets.top + 25, paddingBottom: insets.bottom + 10 },
				styles.container,
				style,
			]}
			{...rest}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 28,
	},
});
