import { Platform } from 'react-native';

const FontsAndroid = {
	SatoshiBlack: {
		fontFamily: 'Satoshi-Black',
	},
	Satoshi: {
		fontFamily: 'Satoshi-Medium',
	},
};

const FontsiOS = {
	SatoshiBlack: {
		fontFamily: 'Satoshi',
		fontWeight: '900'
	},
	Satoshi: {
		fontFamily: 'Satoshi',
		fontWeight: 'normal'
	},
};


const Fonts = Platform.OS === 'android' ? FontsAndroid : FontsiOS;


export default Fonts;