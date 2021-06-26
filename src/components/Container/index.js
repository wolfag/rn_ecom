import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

export default function Container({children}) {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {flex: 1},
});
