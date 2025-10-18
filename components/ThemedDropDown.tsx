import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export type ThemedDropDownProps = {
	data: any[];
	labelField: string;
	valueField: string;
	value: any;
	placeholderText: string;
	onChange: (item: any) => void;
	style?: StyleProp<ViewStyle>;
};

export default function ThemedDropDown({
	data,
	labelField,
	valueField,
	value,
	placeholderText,
	onChange,
	style,
	...rest
}: ThemedDropDownProps) {
	const { primaryText, border, card } = useThemeColor();

	return (
		<Dropdown
			style={[{ borderColor: border }, styles.dropdown, style]}
			data={data}
			containerStyle={[styles.containerStyle, { backgroundColor: card }]}
			itemTextStyle={{ color: primaryText }}
			selectedTextStyle={{ color: primaryText }}
			activeColor={card}
			labelField={labelField}
			valueField={valueField}
			onChange={onChange}
			value={value}
			placeholderStyle={{ color: primaryText, fontSize: 15 }}
			placeholder={placeholderText}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		borderBottomWidth: 0.5,
	},
	containerStyle: {
		borderWidth: 0,
	},
});
