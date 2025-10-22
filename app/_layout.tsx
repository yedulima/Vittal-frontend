import ThemeProvider, { ThemeContext } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
	const { isDark } = useContext(ThemeContext);

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<StatusBar style={isDark ? 'dark' : 'light'} />
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
					<Stack.Screen name="login" options={{ headerShown: false }} />
					<Stack.Screen name="register" options={{ headerShown: false }} />
					<Stack.Screen name="register/[userType]" options={{ headerShown: false }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
