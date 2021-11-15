import React, { useState } from 'react';
import {
	FlatList,
	View,
	Text,
	Pressable,
	StyleSheet,
	Alert,
	Linking,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Validator } from '@services';


const History = ({ items = [], onClearHistory }) => {
	const [copiedText, setCopiedText] = useState('');

	const HistoryItem = ({ item }) => {
		return (
			<Pressable onPress={() => onItemPress(item.data)}>
				<View style={styles.itemContainer}>
					<Text style={styles.itemData}>{item.data}</Text>
					<Text style={styles.itemDate}>{item.date}</Text>
				</View>
			</Pressable>
		);
	};

	const onItemPress = async data => {
		if (Validator.isWebsite(data)) {
			Alert.alert('Confirm to open link', `${data}`, [
				{
					text: 'Yes',
					onPress: async () => {
						await Linking.openURL(data);
					}
				},
				{
					text: 'Cancel',
					style: 'cancel',
				}
			]);
		} else {
			Clipboard.setString(data);
			Alert.alert('Copied to Clipboard');
		}
	};

	const HistoryHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>History</Text>
				<Pressable onPress={onClearHistory}>
					<View style={styles.clearButtonContainer}>
						<Text style={styles.clearButtonTitle}>clear</Text>
					</View>
				</Pressable>
			</View>
		);
	};

	return (
		<FlatList
			data={items}
			renderItem={HistoryItem}
			keyExtractor={item => item.id}
			style={{ flex: 1 }}
			ListHeaderComponent={HistoryHeader}
		/>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
	itemData: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'darkslategray',
	},
	itemDate: {
		fontSize: 14,
		fontWeight: 'normal',
		color: 'gray',
		marginTop: 5,
	},
	headerContainer: {
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	clearButtonContainer: {
		backgroundColor: 'crimson',
		padding: 5,
		borderRadius: 20,
	},
	clearButtonTitle: {
		color: 'white',
		fontSize: 12,
		marginLeft: 5,
		marginRight: 5,
		fontWeight: 'bold',
	}
});

export default History;