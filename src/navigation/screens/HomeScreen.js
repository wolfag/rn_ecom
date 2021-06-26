import React from 'react';
import {PanResponder, View, Animated, StyleSheet, Image} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  pan: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '50%',
  },
});
