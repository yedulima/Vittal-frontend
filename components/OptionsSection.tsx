import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewProps } from 'react-native';

import ThemedText from '@/components/ThemedText';

export type OptionsSectionProps = ViewProps & {
	title: string;
	children: ReactNode;
	style?: StyleProp<ViewProps>;
};

export default function OptionsSection({ title, style, children }: OptionsSectionProps) {
	return (
		<View style={[styles.optionsContainer, style]}>
			<ThemedText text={title} type="subtitle" />
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	optionsContainer: {
		width: '100%',
		gap: 12,
		marginBottom: 20,
	},
});
