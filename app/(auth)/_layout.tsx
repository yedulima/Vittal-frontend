import { Stack } from 'expo-router';

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="login" options={{ animation: 'none' }} />
			<Stack.Screen name="register" />
			<Stack.Screen name="register/[userType]" options={{ animation: 'none' }} />
		</Stack>
	);
}
