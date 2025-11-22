import { FontSize, Large, Normal, Small } from '@/constants/FontText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface FontTextContextInterface {
	actualFontSize: string;
	fontSize: FontSize;
	setFontSize: (size: 'Large' | 'Normal' | 'Small') => Promise<void>;
}

export const FontTextContext = createContext<FontTextContextInterface>({
	actualFontSize: 'Normal',
	fontSize: Normal,
	setFontSize: async () => {},
});

export const useFontTextContext = () => {
	const context = useContext(FontTextContext);
	if (!context) {
		throw new Error('Fail in load font text context.');
	}
	return context;
};

const contextKey = 'FONT_TEXT_SIZE';

export default function FontTextProvider({ children }: { children: ReactNode }) {
	const [fontSizeState, setFontSizeState] = useState<'Large' | 'Normal' | 'Small'>('Normal');

	useEffect(() => {
		const loadFontSize = async () => {
			try {
				const savedFontSize = await AsyncStorage.getItem(contextKey);

				if (savedFontSize !== null) {
					setFontSizeState(JSON.parse(savedFontSize));
				}
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.error(`Font size loading error: ${error}`);
				}
			}
		};

		loadFontSize();
	}, []);

	const setFontSize = async (size: 'Large' | 'Normal' | 'Small') => {
		try {
			const newFont = size;
			setFontSizeState(newFont);

			await AsyncStorage.setItem(contextKey, JSON.stringify(newFont));
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Font size saving error: ${error}`);
			}
		}
	};

	let fontTextSize;

	switch (fontSizeState) {
		case 'Large':
			fontTextSize = Large;
			break;
		case 'Normal':
			fontTextSize = Normal;
			break;
		case 'Small':
			fontTextSize = Small;
			break;
	}

	const parseData = {
		actualFontSize: fontSizeState,
		fontSize: fontTextSize,
		setFontSize,
	};

	return <FontTextContext.Provider value={parseData}>{children}</FontTextContext.Provider>;
}
