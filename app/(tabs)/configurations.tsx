import { useAuthContext } from '@/contexts/AuthContext';
import { useFontTextContext } from '@/contexts/FontTextContext';
import { useThemeContext } from '@/contexts/ThemeContext';
import { configurationsStyles } from '@/styles/screens/ConfigurationsStyles';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';
import DefaultConfigsModal from '@/components/modals/DefaultConfigsModal';
import OptionsSection from '@/components/OptionsSection';
import RadioButton from '@/components/RadioButton';
import SwitchButton from '@/components/SwitchButton';
import UserPersonalInfos from '@/components/UserPersonalInfos';
import UserProfileInfos from '@/components/UserProfileInfos';

export default function ConfigurationsScreen() {
	const { colors, toggleTheme, isDarkMode } = useThemeContext();
	const { setFontSize, actualFontSize, fontSize } = useFontTextContext();
	const styles = configurationsStyles(colors, fontSize);

	const { logout } = useAuthContext();
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const handleLogout = async () => {
		await logout();
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Configurações</Text>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
				<UserProfileInfos />
				<UserPersonalInfos />

				<OptionsSection title="Aparência">
					<SwitchButton value={!!isDarkMode} text="Tema escuro" onPress={() => toggleTheme()} />
				</OptionsSection>

				<OptionsSection title="Acessibilidade">
					<Button
						text="Tamanho do texto"
						subText={
							actualFontSize === 'Large' ? 'Grande' : actualFontSize === 'Small' ? 'Pequeno' : 'Normal'
						}
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
					title="Tamanho da fonte"
					subTitle="Escolha o tamanho ideal para você"
					onClose={() => setIsModalVisible(false)}
				>
					<RadioButton
						title="Grande"
						description="Melhor legibilidade e conforto"
						isActive={actualFontSize === 'Large'}
						onPress={() => {
							setFontSize('Large');
						}}
					/>
					<RadioButton
						title="Normal"
						description="Texto padrão e equilibrado"
						isActive={actualFontSize === 'Normal'}
						onPress={() => {
							setFontSize('Normal');
						}}
					/>
					<RadioButton
						title="Pequena"
						description="Texto mais compacto e discreto"
						isActive={actualFontSize === 'Small'}
						onPress={() => {
							setFontSize('Small');
						}}
					/>
				</DefaultConfigsModal>
			</ScrollView>
		</SafeAreaView>
	);
}
