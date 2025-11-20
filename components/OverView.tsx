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
	const styles = overViewStyles(colors);

	return (
		<View style={styles.container}>
			<Feather name={data.iconName} size={35} style={styles.icon} />
			<View style={styles.infos}>
				<Text style={styles.name}>{data.name}</Text>
				<Text style={styles.count}>{data.count}</Text>
			</View>
		</View>
	);
}
