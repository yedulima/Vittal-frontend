import { StyleSheet } from 'react-native';

import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

export default function ContatcsScreen() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText text="Contacts screen" type='subtitle' />
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
