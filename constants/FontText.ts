import { ThemeColors } from '@/constants/Themes';
import { StyleSheet } from 'react-native';

export interface FontSize {
	h1: number;
	h2: number;
	h3: number;
	body: number;
	accent: number;
	caption: number;
	small: number;

	iconSize: number;
}

export const Large: FontSize = {
	h1: 35,
	h2: 27,
	h3: 23,
	body: 23,
	accent: 19,
	caption: 17,
	small: 16,

	iconSize: 21,
};

export const Normal: FontSize = {
	h1: 32,
	h2: 26,
	h3: 20,
	body: 20,
	accent: 16,
	caption: 14,
	small: 13,

	iconSize: 18,
};

export const Small: FontSize = {
	h1: 28,
	h2: 24,
	h3: 18,
	body: 18,
	accent: 14,
	caption: 12,
	small: 11,

	iconSize: 16,
};

export const FontFamilies = {
	light: 'Rubik_300Light',
	regular: 'Rubik_400Regular',
	medium: 'Rubik_500Medium',
	semibold: 'Rubik_600SemiBold',
	bold: 'Rubik_700Bold',
};

export const FontText = (colors: ThemeColors, size: FontSize) => {
	return StyleSheet.create({
		h1: {
			alignSelf: 'flex-start',
			fontSize: size.h1,
			color: colors.textColor,
			fontFamily: FontFamilies.bold,
		},
		h2: {
			alignSelf: 'flex-start',
			fontSize: size.h2,
			color: colors.textColor,
			fontFamily: FontFamilies.bold,
		},
		h3: {
			alignSelf: 'flex-start',
			fontSize: size.h3,
			color: colors.textColor,
			fontFamily: FontFamilies.semibold,
			lineHeight: 24,
		},

		body: {
			fontSize: size.body,
			color: colors.textColor,
			fontFamily: FontFamilies.regular,
			lineHeight: 24,
		},
		accent: {
			fontSize: size.accent,
			color: colors.accentColor,
			fontFamily: FontFamilies.regular,
		},
		caption: {
			fontSize: size.caption,
			color: colors.accentColor,
			fontFamily: FontFamilies.regular,
		},
		small: {
			fontSize: size.small,
			color: colors.accentColor,
			fontFamily: FontFamilies.regular,
		},

		light: {
			fontFamily: FontFamilies.light,
		},
		regular: {
			fontFamily: FontFamilies.regular,
		},
		medium: {
			fontFamily: FontFamilies.medium,
		},
		semibold: {
			fontFamily: FontFamilies.semibold,
		},
		bold: {
			fontFamily: FontFamilies.bold,
		},
	});
};
