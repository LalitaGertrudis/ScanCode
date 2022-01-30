import React, { useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Scanner = ({ navigation }) => {
	const camera = useRef();
	const onBarcodeDetected = ({ barcodes }) => {
		if (barcodes.length > 0) {
			navigation.navigate('Dashboard', {
				barcode: barcodes[0],
			});
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
			<RNCamera
				autoFocus={true}
				ref={camera}
				style={{ flex: 1, backgroundColor: 'black' }}
				type={RNCamera.Constants.Type.back}
				flashMode={RNCamera.Constants.FlashMode.on}
				androidCameraPermissionOptions={{
					title: 'Permission to use camera',
					message: 'We need your permission to use your camera',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}
				onGoogleVisionBarcodesDetected={onBarcodeDetected}
				googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
				googleVisionBarcodeMode={
					RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
				}
				captureAudio={false}
			>
			</RNCamera>
		</SafeAreaView>
	);
};

export default Scanner;
