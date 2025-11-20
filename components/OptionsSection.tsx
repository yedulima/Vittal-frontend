import { useThemeContext } from '@/contexts/ThemeContext';
import { optionsSectionStyles } from '@/styles/components/OptionsSectionStyles';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface OptionsSectionProps {
	title: string;
	children: ReactNode;
}

export default function OptionsSection({ title, children }: OptionsSectionProps) {
	const { colors } = useThemeContext();
	const styles = optionsSectionStyles(colors);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			{children}
		</View>
	);
}
