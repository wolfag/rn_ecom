/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
 
  return (
    <SafeAreaView>
      <Text>hello</Text>
      <Icon name="rocket" size={30} color="#900" />
      <LottieView
        source={require('@src/assets/animations/truck.json')}
        style={{height: 35}}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};


export default App;
