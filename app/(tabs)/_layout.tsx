import { NotificationInterface } from '@/api/interfaces';
import { listenForNotifications } from '@/api/services/notification.service';
import { useAuthContext } from '@/contexts/AuthContext';
import FontTextProvider, { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useEffect, useState } from 'react';

const InitialLayout = () => {
	const { role, user } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();

	const [notificationsLenght, setNotificationsLenght] = useState<number>();

	useEffect(() => {
		const unsubscribe = listenForNotifications(user?.uid as string, (newNotifications: NotificationInterface[]) => {
			const filteredNotifications = newNotifications.filter((noti) => !noti.read);
			setNotificationsLenght(filteredNotifications.length);
		});

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
		};
	}, []);

	const tabIconsSize = fontSize.iconSize + 8;

	return (
		<Tabs
			screenOptions={{
				sceneStyle: { backgroundColor: colors?.backgroundColor },
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
				options={{ tabBarIcon: ({ color }) => <Feather name="home" color={color} size={tabIconsSize} /> }}
			/>
			<Tabs.Protected guard={role === 'cuidador'}>
				<Tabs.Screen
					name="contacts"
					options={{
						tabBarIcon: ({ color }) => <Feather name="users" color={color} size={tabIconsSize} />,
					}}
				/>
			</Tabs.Protected>
			<Tabs.Protected guard={role === 'idoso'}>
				<Tabs.Screen
					name="medicines"
					options={{
						tabBarIcon: ({ color }) => <FontAwesome5 name="capsules" color={color} size={tabIconsSize} />,
					}}
				/>
			</Tabs.Protected>
			<Tabs.Screen
				name="notifications"
				options={{
					tabBarIcon: ({ color }) => <Feather name="bell" color={color} size={tabIconsSize} />,
					tabBarBadge: notificationsLenght ? notificationsLenght : undefined,
					tabBarBadgeStyle: {
						backgroundColor: colors.notificationBadgeBackground,
						color: colors.notificationBadgeTextColor,
						fontFamily: 'Rubik_500Medium',
					},
				}}
			/>
			<Tabs.Screen
				name="configurations"
				options={{
					tabBarIcon: ({ color }) => <Octicons name="gear" color={color} size={tabIconsSize} />,
				}}
			/>
		</Tabs>
	);
};

export default function TabsLayout() {
	return (
		<FontTextProvider>
			<InitialLayout />
		</FontTextProvider>
	);
}
