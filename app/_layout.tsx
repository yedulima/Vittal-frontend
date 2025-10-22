import ThemeProvider, { ThemeContext } from '@/contexts/ThemeContext';
import { useAuthRedirect } from '@/hooks/useAuth';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
	const { isDark } = useContext(ThemeContext);
	useAuthRedirect();

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<StatusBar style={isDark ? 'dark' : 'light'} />
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(auth)" />
					<Stack.Screen name="(tabs)" />
				</Stack>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
