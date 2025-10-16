import { Colors } from '@/constants/Colors';
import { ThemeContext } from '@/contexts/ThemeContext';
import { useContext } from 'react';

type ColorKey = keyof (typeof Colors)['dark'] & keyof (typeof Colors)['light'];

export const useThemeColor = (key: ColorKey) => {
	const { currentTheme } = useContext(ThemeContext);

	const theme = currentTheme === 'dark' ? 'dark' : 'light';

	return Colors[theme][key];
};
