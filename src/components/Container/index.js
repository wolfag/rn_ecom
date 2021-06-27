import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

export default function Container({children, center}) {
  const style = [styles.root];
  if (center) {
    style.push({
      justifyContent: 'center',
      alignItems: 'center',
    });
  }
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {flex: 1, width: '100%'},
});
