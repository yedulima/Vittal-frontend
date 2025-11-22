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
	backgroundColor: Colors.white[600],
	textColor: Colors.black,
	buttonColor: Colors.green[500],
	buttonTextColor: Colors.white[800],
	iconColor: Colors.gray[400],
	accentColor: Colors.gray[550],
	imageBackgroundColor: Colors.white[500],

	cardColor: Colors.white[800],
	cardBorderColor: Colors.gray[100],

	tabBarColor: Colors.white[700],
	tabBarActiveTintColor: Colors.green[500],
	tabBarInactiveTintColor: Colors.gray[300],

	backDropColor: 'rgba(0, 0, 0, 0.5)',

	trackActiveColor: Colors.green[500],
	trackInactiveColor: Colors.white[500],
};

export const DarkTheme: ThemeColors = {
	backgroundColor: Colors.navy[950],
	textColor: Colors.white[700],
	buttonColor: Colors.navy[925],
	buttonTextColor: Colors.white[700],
	iconColor: Colors.blue[350],
	accentColor: Colors.blue[350],
	imageBackgroundColor: Colors.gray[500],

	cardColor: Colors.navy[925],
	cardBorderColor: Colors.navy[750],

	tabBarColor: Colors.navy[800],
	tabBarActiveTintColor: Colors.green[500],
	tabBarInactiveTintColor: Colors.navy[700],

	backDropColor: 'rgba(0, 0, 0, 0.5)',

	trackActiveColor: Colors.green[500],
	trackInactiveColor: Colors.gray[300],
};
