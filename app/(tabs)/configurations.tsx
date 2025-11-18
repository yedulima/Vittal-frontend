import { useAuthContext } from '@/contexts/AuthContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { configurationsStyles } from '@/styles/screens/ConfigurationsStyles';
import { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';
import DefaultConfigsModal from '@/components/modals/DefaultConfigsModal';
import OptionsSection from '@/components/OptionsSection';
import SwitchButton from '@/components/SwitchButton';
import UserPersonalInfos from '@/components/UserPersonalInfos';
import UserProfileInfos from '@/components/UserProfileInfos';

export default function ConfigurationsScreen() {
	const { colors, toggleTheme, isDarkMode } = useThemeContext();
	const styles = configurationsStyles(colors!);

	const { logout } = useAuthContext();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const handleLogout = async () => {
		try {
			await logout!();
		} catch (error: any) {
			console.error(`On configurations screen error: ${error}`);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Configurações</Text>

			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<UserProfileInfos />
				<UserPersonalInfos />

				<OptionsSection title="Aparência">
					<SwitchButton value={!!isDarkMode} text="Tema escuro" onPress={() => toggleTheme!()} />
				</OptionsSection>

				<OptionsSection title="Acessibilidade">
					<Button
						text="Tamanho do texto"
						rightIconName="arrow-right"
						onPress={() => setIsModalVisible(true)}
						style={styles.button}
						textStyle={styles.buttonText}
					/>
				</OptionsSection>

				<Button
					text="Encerrar sessão"
					leftIconName="corner-up-left"
					onPress={handleLogout}
					style={styles.logoutButton}
					textStyle={styles.logoutText}
					iconColor="#fff"
				/>

				<DefaultConfigsModal
					isVisible={isModalVisible}
					title="Text size"
					subTitle="Altere o tamanho da letra"
					onClose={() => setIsModalVisible(false)}
				>
					{/* <Text style={styles.text}>Ata</Text> */}
				</DefaultConfigsModal>
			</ScrollView>
		</SafeAreaView>
	);
}
