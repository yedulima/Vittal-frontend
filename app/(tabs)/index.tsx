import { useThemeContext } from '@/contexts/ThemeContext';
import { homeStyles } from '@/styles/screens/HomeStyles';
import { NOTIFICATIONS, OVERVIEW } from '@/utils/data';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import LastNotificationsList from '@/components/LastNotificationsList';
import OverViewList from '@/components/OverViewList';

export default function HomeScreen() {
	const { colors } = useThemeContext();
	const styles = homeStyles(colors!);

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<OverViewList data={OVERVIEW} />
			<LastNotificationsList data={NOTIFICATIONS} />
		</SafeAreaView>
	);
}
