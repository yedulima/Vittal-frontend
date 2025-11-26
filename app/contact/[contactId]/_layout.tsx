import FontTextProvider from '@/contexts/FontTextContext';
import { Stack } from 'expo-router';

export default function ContactLayout() {
	return (
		<FontTextProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="medications" />
			</Stack>
		</FontTextProvider>
	);
}
