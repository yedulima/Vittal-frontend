import { Colors } from '@/constants/Colors';

export interface ThemeColors {
	backgroundColor: string;
	textColor: string;
	buttonColor: string;
	buttonTextColor: string;
	iconColor: string;
	accentColor: string;
	imageBackgroundColor: string;

	cardColor: string;
	cardBorderColor: string;

	tabBarColor: string;
	tabBarActiveTintColor: string;
	tabBarInactiveTintColor: string;

	backDropColor: string;

	// Switch button colors
	trackActiveColor: string;
	trackInactiveColor: string;
}

export const LightTheme: ThemeColors = {
	backgroundColor: Colors.white[500],
	textColor: Colors.black,
	buttonColor: Colors.green[500],
	buttonTextColor: Colors.white[800],
	iconColor: Colors.gray[400],
	accentColor: Colors.gray[300],
	imageBackgroundColor: Colors.white[500],

	cardColor: Colors.white[600],
	cardBorderColor: Colors.white[300],

	tabBarColor: Colors.white[700],
	tabBarActiveTintColor: Colors.green[500],
	tabBarInactiveTintColor: Colors.gray[300],

	backDropColor: 'rgba(0, 0, 0, 0.5)',

	trackActiveColor: Colors.white[200],
	trackInactiveColor: Colors.white[500],
};

export const DarkTheme: ThemeColors = {
	backgroundColor: Colors.gray[700],
	textColor: Colors.white[700],
	buttonColor: Colors.gray[400],
	buttonTextColor: Colors.white[400],
	iconColor: Colors.gray[300],
	accentColor: Colors.gray[300],
	imageBackgroundColor: Colors.gray[500],

	cardColor: Colors.gray[600],
	cardBorderColor: Colors.gray[500],

	tabBarColor: Colors.gray[800],
	tabBarActiveTintColor: Colors.gray[100],
	tabBarInactiveTintColor: Colors.gray[400],

	backDropColor: 'rgba(0, 0, 0, 0.5)',

	trackActiveColor: Colors.gray[400],
	trackInactiveColor: Colors.gray[300],
};
