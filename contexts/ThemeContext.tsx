import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export type ThemeContextType = {
	currentTheme: string;
	toggleTheme: (newTheme: 'light' | 'dark') => void;
	useSystemTheme: () => void;
	isDark: boolean;
	isSystemTheme: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
	currentTheme: 'light',
	toggleTheme: () => {},
	useSystemTheme: () => {},
	isDark: false,
	isSystemTheme: true,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const colorScheme = useColorScheme();
	const [theme, setTheme] = useState<string>('light');
	const [isDark, setIsDark] = useState<boolean>(false);
	const [isSystemTheme, setIsSystemTheme] = useState<boolean>(true);

	useEffect(() => {
		const getTheme = async () => {
			try {
				const savedTheme = await AsyncStorage.getItem('theme');
				const savedThemeObjectData = JSON.parse(savedTheme!);
				const themeMode = savedThemeObjectData.mode;

				if (themeMode) {
					setTheme(themeMode);
					setIsDark(themeMode === 'dark' ? true : false);
					setIsSystemTheme(savedThemeObjectData.system);
				}
			} catch (error) {
				console.error(`Error in theme loading: ${error}`);
			}
		};

		getTheme();
	}, []);

	useEffect(() => {
		if (colorScheme && isSystemTheme) {
			const themeObject = {
				mode: colorScheme,
				system: true,
			};

			setTheme(colorScheme);
			setIsDark(colorScheme === 'dark' ? true : false);
			setIsSystemTheme(true);
			AsyncStorage.setItem('theme', JSON.stringify(themeObject));
		}
	}, [colorScheme]);

	const toggleTheme = (newTheme: 'light' | 'dark') => {
		const themeObject = {
			mode: newTheme,
			system: false,
		};

		setTheme(newTheme);
		setIsDark(newTheme === 'dark' ? true : false);
		setIsSystemTheme(false);
		AsyncStorage.setItem('theme', JSON.stringify(themeObject));
	};

	const useSystemTheme = () => {
		if (colorScheme) {
			const themeObject = {
				mode: colorScheme,
				system: true,
			};

			setTheme(colorScheme);
			setIsDark(colorScheme === 'dark' ? true : false);
			setIsSystemTheme(true);
			AsyncStorage.setItem('theme', JSON.stringify(themeObject));
		}
	};

	return (
		<ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, useSystemTheme, isDark, isSystemTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
