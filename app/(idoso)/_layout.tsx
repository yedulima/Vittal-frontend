import { useThemeColor } from '@/hooks/useThemeColor';
import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

import ThemedView from '@/components/ThemedView';

export default function IdosoLayout() {
	const { primary, primaryText, header } = useThemeColor();

	return (
		<ThemedView style={{ flex: 1 }}>
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
					name="medicines"
					options={{
						title: 'Medicações',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons name={focused ? 'medkit' : 'medkit-outline'} color={color} size={24} />
						),
					}}
				/>
				<Tabs.Screen
					name="notifications"
					options={{
						title: 'Notificações',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<Ionicons
								name={focused ? 'notifications' : 'notifications-outline'}
								color={color}
								size={24}
							/>
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
		</ThemedView>
	);
}
