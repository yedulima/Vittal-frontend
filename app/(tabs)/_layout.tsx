import { useThemeContext } from '@/contexts/ThemeContext';
import { Feather, Octicons, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
	const { colors } = useThemeContext();

	return (
		<Tabs
			screenOptions={{
				sceneStyle: { backgroundColor: colors?.backgroudColor },
				headerShown: false,
				tabBarActiveTintColor: colors?.tabBarActiveTintColor,
				tabBarInactiveTintColor: colors?.tabBarInactiveTintColor,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: colors?.tabBarColor,
					borderTopColor: colors?.tabBarColor,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{ tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> }}
			/>
			<Tabs.Screen
				name="contacts"
				options={{ tabBarIcon: ({ color, size }) => <Feather name="users" color={color} size={size} /> }}
			/>
			<Tabs.Screen
				name="notifications"
				options={{ tabBarIcon: ({ color, size }) => <Feather name="bell" color={color} size={size} /> }}
			/>
			<Tabs.Screen
				name="medicines"
				options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="capsules" color={color} size={size} /> }}
			/>
			<Tabs.Screen
				name="configurations"
				options={{ tabBarIcon: ({ color, size }) => <Octicons name="gear" color={color} size={size} /> }}
			/>
		</Tabs>
	);
}
