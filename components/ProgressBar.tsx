import { LightTheme } from '@/constants/Themes';
import { progressBarStyles } from '@/styles/components/ProgressBarStyles';
import { View } from 'react-native';

interface ProgressBarInterface {
	percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarInterface) {
	const styles = progressBarStyles(LightTheme);

	return (
		<View style={styles.container}>
			<View style={[styles.progressBar, { width: `${percentage}%` }]}></View>
		</View>
	);
}
