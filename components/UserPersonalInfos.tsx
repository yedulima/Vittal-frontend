import { useAuthContext } from '@/contexts/AuthContext';

import ProfileSection from '@/components/ProfileSection';

export default function UserPersonalInfos() {
	const { user, userData } = useAuthContext();

	return (
		<ProfileSection
			title="Informações pessoais"
			items={[
				{ name: 'Nome', content: userData?.name as string },
				{ name: 'Email', content: user?.email as string },
				{ name: 'Telefone', content: userData?.phoneNumber as string },
				{ name: 'Data de nascimento', content: userData?.birthday as string },
			]}
		/>
	);
}
