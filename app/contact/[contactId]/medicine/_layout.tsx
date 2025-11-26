import FontTextProvider from '@/contexts/FontTextContext';
import ThemeProvider, { useThemeContext } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';

const InitialLayout = () => {
	const { colors } = useThemeContext();

	return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.backgroundColor } }} />;
};

export default function MedicineLayout() {
	return (
		<ThemeProvider>
			<FontTextProvider>
				<InitialLayout />
			</FontTextProvider>
		</ThemeProvider>
	);
}
