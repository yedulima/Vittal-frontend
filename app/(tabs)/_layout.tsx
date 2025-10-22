import { useThemeColor } from '@/hooks/useThemeColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
	const { primary, primaryText, header } = useThemeColor();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: primary,
				headerStyle: {
					backgroundColor: header,
				},
				headerShadowVisible: false,
				headerTintColor: primaryText,
				tabBarStyle: {
					backgroundColor: header,
				},
				headerTitleAlign: 'center',
				animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name="contacts"
				options={{
					title: 'Contatos',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					title: 'Notificações',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={24} />
					),
				}}
			/>
			<Tabs.Screen
				name="configurations"
				options={{
					title: 'Configurações',
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} size={24} />
					),
				}}
			/>
		</Tabs>
	);
}
