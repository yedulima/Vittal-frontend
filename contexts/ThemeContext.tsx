import { DarkTheme, LightTheme, ThemeColors } from '@/constants/Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface ThemeContextInterface {
	isDarkMode: boolean;
	colors: ThemeColors;
	toggleTheme: () => Promise<void>;
	setTheme: (theme: 'light' | 'dark') => Promise<void>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
	isDarkMode: false,
	colors: LightTheme,
	toggleTheme: async () => {},
	setTheme: async () => {},
});

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('Fail in load theme context.');
	}
	return context;
};

const contextKey = 'THEME_CONTEXT';

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const loadTheme = async () => {
			try {
				const savedTheme = await AsyncStorage.getItem(contextKey);

				if (savedTheme !== null) {
					setIsDarkMode(JSON.parse(savedTheme));
				}
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.error(`Theme loading error: ${error}`);
				}
			}
		};

		loadTheme();
	}, []);

	const toggleTheme = async () => {
		try {
			const newTheme = !isDarkMode;
			setIsDarkMode(newTheme);

			await AsyncStorage.setItem(contextKey, JSON.stringify(newTheme));
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Error saving theme: ${error}`);
			}
		}
	};

	const setTheme = async (theme: 'light' | 'dark') => {
		try {
			const newTheme = theme === 'dark';
			setIsDarkMode(newTheme);

			await AsyncStorage.setItem(contextKey, JSON.stringify(newTheme));
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Error saving theme: ${error}`);
			}
		}
	};

	const themeColors = isDarkMode ? DarkTheme : LightTheme;

	const parseData = {
		isDarkMode,
		colors: themeColors,
		toggleTheme,
		setTheme,
	};

	return <ThemeContext.Provider value={parseData}>{children}</ThemeContext.Provider>;
}
