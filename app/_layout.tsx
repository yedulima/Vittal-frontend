import { LightTheme } from '@/constants/Themes';
import AuthProvider, { useAuthContext } from '@/contexts/AuthContext';
import ThemeProvider, { useThemeContext } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import Loading from '@/components/Loading';

const InitialLayout = () => {
	const { isDarkMode } = useThemeContext();
	const { isLoggedIn, loading } = useAuthContext();

	if (!!loading && !isLoggedIn) {
		return <Loading />;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: LightTheme.backgroudColor,
				},
			}}
		>
			<Stack.Protected guard={!!isLoggedIn}>
				<Stack.Screen name="(tabs)" />
			</Stack.Protected>
			<Stack.Protected guard={!isLoggedIn}>
				<Stack.Screen name="index" />
				<Stack.Screen name="login" />
				<Stack.Screen name="choose_user" />
				<Stack.Screen name="register" />
			</Stack.Protected>
			<StatusBar style={isDarkMode ? 'dark' : 'light'} />
		</Stack>
	);
};

export default function RootLayout() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<InitialLayout />
			</AuthProvider>
		</ThemeProvider>
	);
}
