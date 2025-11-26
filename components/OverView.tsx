import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { overViewStyles } from '@/styles/components/OverViewStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface OverViewProps {
	data: {
		name: string;
		count: string;
		iconName: React.ComponentProps<typeof Feather>['name'];
	};
}

export default function OverView({ data }: OverViewProps) {
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = overViewStyles(colors, fontSize);

	return (
		<View style={styles.container}>
			<View style={styles.IconContainer}>
				<Feather name={data.iconName} size={fontSize.iconSize + 15} style={styles.icon} />
			</View>
			<View style={styles.infos}>
				<Text style={styles.name}>{data.name}</Text>
				<Text style={styles.count}>{data.count}</Text>
			</View>
		</View>
	);
}
