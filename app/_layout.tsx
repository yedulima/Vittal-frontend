import ThemeProvider, { ThemeContext } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';

export default function RootLayout() {
	const { isDark } = useContext(ThemeContext);

	return (
		<ThemeProvider>
			<StatusBar style={isDark ? 'dark' : 'light'} />
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	);
}
