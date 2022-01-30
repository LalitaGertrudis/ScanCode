import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Dashboard,
	Scanner
} from '@screens';
import { AppTheme } from '@styles';


const Stack = createNativeStackNavigator();

const App = () => {
	const scheme = useColorScheme();

	return (
		<NavigationContainer theme={scheme === 'dark' ? AppTheme.Dark : AppTheme.Light}>
			<Stack.Navigator>
				<Stack.Screen
					name="Dashboard"
					component={Dashboard}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Scanner"
					component={Scanner}
					options={{
						title: 'Scanning',
						headerBackTitleVisible: false,
						headerStyle: {
							backgroundColor: 'black',
						},
						headerTintColor: 'white'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
