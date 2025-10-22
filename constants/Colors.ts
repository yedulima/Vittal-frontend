export interface ThemeColor {
	primary: string;
	background: string;
	card: string;
	primaryText: string;
	secondaryText: string;
	border: string;
	button: string;
	button2: string;
	active: string;

	emergency: string;
	warning: string;
	header: string;
}

export const DefaultTheme: ThemeColor = {
	primary: 'rgb(10, 132, 255)',
	background: 'rgb(242, 242, 242)',
	card: 'rgb(255, 255, 255)',
	primaryText: 'rgb(28, 28, 30)',
	secondaryText: 'rgba(116, 114, 114, 1)',
	border: 'rgb(199, 199, 204)',
	button: 'rgba(231, 231, 231, 1)',
	button2: 'rgba(65, 189, 98, 1)',
	active: 'rgba(53, 192, 90, 1)',

	emergency: 'rgb(255, 69, 58)',
	warning: '#f1bb31ff',
	header: 'rgba(247, 247, 247, 1)',
};

export const DarkTheme: ThemeColor = {
	primary: 'rgba(255, 255, 255, 1)',
	background: 'rgba(15, 15, 15, 1)',
	card: 'rgb(18, 18, 18)',
	primaryText: 'rgb(229, 229, 231)',
	secondaryText: 'rgba(145, 145, 145, 1)',
	border: 'rgb(39, 39, 41)',
	button: 'rgba(24, 24, 24, 1)',
	button2: 'rgba(65, 189, 98, 1)',
	active: 'rgba(65, 189, 98, 1)',

	emergency: 'rgb(255, 69, 58)',
	warning: '#dfa820',
	header: 'rgba(15, 14, 14, 1)',
};
