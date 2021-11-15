import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Dashboard,
	Scanner
} from '@screens';


const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Dashboard"
					component={Dashboard}
					options={{ title: 'ScanCode' }}
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
