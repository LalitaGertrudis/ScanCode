import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Pressable,
	FlatList,
	Image,
	Linking,
	Alert,
	StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Button, Empty, History } from '@components';
import { Storage, Validator } from '@services';

const Dashboard = ({ navigation, route }) => {
	const [copiedText, setCopiedText] = useState('');
	const [history, setHistory] = useState([]);
	const barcode = route?.params?.barcode;

	useEffect(() => {
		(async () => {
			await loadHistory();
		})();
	}, []);

	useEffect(() => {
		if (barcode) {
			const { data } = barcode;

			if (!data) {
				return;
			}

			(async () => {
				await Storage.add(data);
				await loadHistory();

				if (Validator.isWebsite(data)) {
					Alert.alert('Confirm to open link', `${data}`, [
						{
							text: 'Open link',
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
			})(data);
		}
	}, [barcode]);


	const loadHistory = async () => {
		const data = await Storage.read();
		setHistory(data);
	};

	const onClearHistory = () => {
		Alert.alert('Clear History', 'Do you want to remove all items?', [
			{
				text: 'Yes',
				onPress: async () => {
					await Storage.removeAll();
					await loadHistory();
				},
			},
			{
				text: 'cancel',
				style: 'cancel',
			}
		]);
	};

	const openScanner = () => {
		navigation.navigate('Scanner');
	};

	return (
		<SafeAreaView style={styles.fullscreen}>
			{history.length === 0 ? <Empty /> : <History items={history} onClearHistory={onClearHistory} />}
			<Button title="Open Scanner" onPress={openScanner} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	fullscreen: {
		flex: 1,
	},
});

export default Dashboard;
