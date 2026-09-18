import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';

import IntroductionScreen from './screens/IntroductionScreen';
import ProductsScreen from './screens/ProductsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Introduction"
          component={IntroductionScreen}
          options={{ title: 'Laptop Store' }}
        />

        <Stack.Screen
  name="Products"
  component={ProductsScreen}
  options={{ title: 'Products' }}
  />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}