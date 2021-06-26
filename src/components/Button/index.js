import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

function Button({mode, style, children, ...rest}) {
  return (
    <TouchableOpacity style={[styles.button, style]} mode={mode} {...rest}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 15,
    elevation: 0,
    borderWidth: 0,
    padding: 10,
  },
  text: {},
});

export default memo(Button);
