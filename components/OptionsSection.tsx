import { useFontTextContext } from '@/contexts/FontTextContext';
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
	const { fontSize } = useFontTextContext();
	const styles = optionsSectionStyles(colors, fontSize);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.content}>{children}</View>
		</View>
	);
}
