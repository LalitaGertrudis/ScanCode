import React from 'react';
import {
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Fonts } from '@styles';

const Empty = () => {
	const { colors } = useTheme();
	const styles = stylesheet(colors);
	
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Empty history</Text>
			<Image source={require('@assets/images/qr-code-no-bg.png')} style={styles.qr} resizeMode="contain" />
			<Text style={styles.text}>Tab below and scan your first QR code.</Text>
		</View>
	);
};

const stylesheet = colorScheme => StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	qr: {
		width: '50%',
		height: '50%',
	},
	text: {
		...Fonts.Satoshi,
		color: colorScheme.text,
		fontSize: 20,
		textAlign: 'center',
		width: '60%',
	},
	header: {
		...Fonts.SatoshiBlack,
		fontSize: 34,
		color: colorScheme.text,
		textAlign: 'center',
	},
});

export default Empty;
