import { StyleSheet } from 'react-native';

import ThemedText from '@/components/ThemedText';
import ThemedSafeAreaView from '@/components/ThemedSafeAreaView';

export default function HomeScreen() {
	return (
		<ThemedSafeAreaView>
			<ThemedText text="Home" type="title" style={styles.title} />
			<ThemedText text="Home screen" type='subtitle' />
		</ThemedSafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		alignSelf: 'flex-start',
		paddingBottom: 30,
	},
});
