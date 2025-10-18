import { DarkTheme, DefaultTheme } from '@/constants/Colors';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

export const useThemeColor = () => {
	const { currentTheme } = useContext(ThemeContext);

	if (currentTheme === 'dark') {
		return DarkTheme;
	}
	return DefaultTheme;
};
