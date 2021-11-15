import React from 'react';
import {
	Pressable,
	View,
	Text,
	StyleSheet,
} from 'react-native';


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
		height: 60,
		backgroundColor: 'tomato',
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 30,
		marginBottom: 10,
		marginTop: 10,
	},
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	}
});

export default Button;
