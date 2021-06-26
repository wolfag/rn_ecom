import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

function Logo({style, ...rest}) {
  return (
    <Image
      source={require('@src/assets/images/carrot.png')}
      style={[styles.image, style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 20,
  },
});

export default memo(Logo);
