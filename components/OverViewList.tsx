import { useThemeContext } from '@/contexts/ThemeContext';
import { overViewListStyles } from '@/styles/components/OverViewListStyles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { FlatList, View } from 'react-native';

import OverView from '@/components/OverView';

interface OverViewListProps {
	data: {
		id: string;
		name: string;
		count: string;
		iconName: React.ComponentProps<typeof Feather>['name'];
	}[];
}

export default function OverViewList({ data }: OverViewListProps) {
	const { colors } = useThemeContext();
	const styles = overViewListStyles(colors);

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				scrollEnabled={false}
				renderItem={({ item }) => <OverView data={item} />}
			/>
		</View>
	);
}
