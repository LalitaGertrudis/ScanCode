import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const add = async dataText => {
	const list = await read();
	
	list.push({
		id: uuidv4(),
		data: dataText,
		date: moment().format('lll'),
	});

	await AsyncStorage.setItem('@history', JSON.stringify(list));
};

const read = async () => {
	const list = await AsyncStorage.getItem('@history');

	if (list === null) {
		return [];
	}
	
	return JSON.parse(list);
};

const removeAll = async () => {
	await AsyncStorage.clear();
};


export default {
	add,
	read,
	removeAll
};
