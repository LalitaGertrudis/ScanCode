import React from 'react';
import {
	Pressable,
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Colors, Fonts } from '@styles';

const Button = ({ title, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 30,
		marginBottom: 10,
		marginTop: 10,
		padding: 12,
	},
	title: {
		...Fonts.SatoshiBlack,
		color: 'white',
		fontSize: 20,
	}
});

export default Button;
