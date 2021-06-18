import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabBarBottom from './TabBarBottom';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="TabBarBottom" component={TabBarBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
