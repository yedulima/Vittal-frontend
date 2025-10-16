import { StyleSheet } from 'react-native';

import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

export default function NotificationsScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText text="Notifications screen" type='subtitle' />
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
