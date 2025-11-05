import { LightTheme } from '@/constants/Themes';
import { ActivityIndicator, View } from 'react-native';

import { loadingStyles } from '@/styles/components/LoadingStyles';

export default function Loading() {
	const styles = loadingStyles();

	return (
		<View style={styles.container}>
			<ActivityIndicator color={LightTheme.accentColor} size={'large'} />
		</View>
	);
}
