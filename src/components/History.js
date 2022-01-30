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
import { useTheme } from '@react-navigation/native';
import { Fonts } from '@styles';

const History = ({ items = [], onClearHistory }) => {
	const { colors } = useTheme();
	const styles = stylesheet(colors);
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

const stylesheet = colorScheme => StyleSheet.create({
	itemContainer: {
		backgroundColor: colorScheme.backgroundItem,
		padding: 10,
		margin: 10,
		borderRadius: 10,
		borderColor: colorScheme.shadow,
		borderWidth: 1,
	},
	itemData: {
		...Fonts.Satoshi,
		fontSize: 18,
		color: colorScheme.text,
	},
	itemDate: {
		...Fonts.Satoshi,
		fontSize: 14,
		color: colorScheme.primary,
		marginTop: 5,
	},
	headerContainer: {
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: 34,
		...Fonts.SatoshiBlack,
		color: colorScheme.text,
	},
	clearButtonContainer: {
		backgroundColor: 'crimson',
		padding: 5,
		borderRadius: 20,
	},
	clearButtonTitle: {
		...Fonts.Satoshi,
		color: 'white',
		fontSize: 12,
		marginLeft: 5,
		marginRight: 5,
	}
});

export default History;