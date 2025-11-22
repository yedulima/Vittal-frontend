import { Colors } from '@/constants/Colors';
import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export const userProfilePhotoStyles = (colors: ThemeColors) => {
	const photoSize = 145;

	return StyleSheet.create({
		container: {
			width: '100%',
			alignItems: 'center',
		},
		content: {
			width: '40%',
		},
		photo: {
			alignSelf: 'center',
			width: photoSize,
			height: photoSize,
			borderRadius: 100,
			borderWidth: 2,
			marginBottom: 20,
			borderColor: colors.cardBorderColor,
			backgroundColor: colors.imageBackgroundColor,
		},
		selectButton: {
			position: 'absolute',
			justifyContent: 'center',
			alignContent: 'center',
			right: 0,
			bottom: 20,
			backgroundColor: colors.buttonColor,
			paddingHorizontal: 10,
			paddingVertical: 8,
			borderRadius: 50,
		},
		icon: {
			color: Colors.white[800],
		},
	});
};
