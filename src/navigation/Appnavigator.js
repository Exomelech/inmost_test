import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drinks from '../screens/Drinks';
import Filters from '../screens/Filters';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Drinks">
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  </NavigationContainer>
);