import { getIdosoById } from '@/api/services/idoso.service';
import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useSendMessage } from '@/hooks/useSendMessage';
import { homeStyles } from '@/styles/screens/HomeStyles';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';
import Header from '@/components/Header';
import LastNotificationsList from '@/components/LastNotificationsList';
import OkModal from '@/components/modals/OkModal';

export default function HomeScreen() {
	const { user, role } = useAuthContext();
	const { colors } = useThemeContext();
	const { fontSize } = useFontTextContext();
	const styles = homeStyles(colors, fontSize);

	const [cuidadorRef, setCuidadorRef] = useState<string>('');
	const [isOkModalVisible, setIsOkModalVisible] = useState<boolean>(false);

	useEffect(() => {
		const getCuidadorRef = async () => {
			if (role === 'idoso') {
				const idosoData = await getIdosoById(user?.uid!);
				const data = idosoData.data.data;
				setCuidadorRef(data.cuidador_ref);
			}
		};

		getCuidadorRef();
	}, []);

	const handleConfirmSendMessage = async () => {
		setIsOkModalVisible(true);
		await useSendMessage(
			cuidadorRef,
			user?.uid as string,
			`Idoso pressionou botão emergência`,
			`${user?.displayName} precisa da sua ajuda!`
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			{role === 'idoso' && (
				<Button
					text="SOS"
					caption="Botão de emergência"
					style={styles.emergencyButton}
					textStyle={styles.emergencyButtonText}
					captionStyle={styles.emergencyButtonCaption}
					onPress={handleConfirmSendMessage}
				/>
			)}
			<LastNotificationsList />
			<OkModal
				title="Mensagem SOS Enviada"
				isVisible={isOkModalVisible}
				onClose={() => setIsOkModalVisible(false)}
			/>
		</SafeAreaView>
	);
}
