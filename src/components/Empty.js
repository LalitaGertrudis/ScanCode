import React from 'react';
import {
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native';

const Empty = () => {
	
	return (
		<View style={styles.container}>
			<Text style={styles.header}>You don't have any history, tap Open Scanner to scan your first QR code.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		color: 'gray',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginLeft: 20,
		marginRight: 20,
	}
});

export default Empty;
