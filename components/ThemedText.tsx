import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
	text: string;
	type?: 'default' | 'light' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
	color?: string;
};

export default function ThemedText({ text, type, color, style, ...rest }: ThemedTextProps) {
	const { primaryText } = useThemeColor();

	return (
		<Text
			style={[
				{ color: color ? color : primaryText },
				type === 'default' ? styles.default : undefined,
				type === 'light' ? styles.light : undefined,
				type === 'title' ? styles.title : undefined,
				type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
				type === 'subtitle' ? styles.subtitle : undefined,
				type === 'link' ? styles.link : undefined,
				style,
			]}
			{...rest}
		>
			{text}
		</Text>
	);
}

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
		lineHeight: 24,
	},
	light: {
		fontSize: 15,
		fontWeight: 'light',
	},
	defaultSemiBold: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '600',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 32,
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: '#0a7ea4',
	},
});
