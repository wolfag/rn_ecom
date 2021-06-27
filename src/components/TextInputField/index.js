import {Theme} from '@src/common/theme';
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TextInputField({
  errorText,
  label,
  value,
  isIcon,
  isPassword,
  inputRef,
  blurOnSubmit,
  onFocus,
  onBlur,
  ...rest
}) {
  const [isShowPass, setIsShowPass] = useState(isPassword);
  const [isShowLabel, setIsShowLabel] = useState(false);

  const _onFocus = val => setIsShowLabel(val);

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.inputContainer,
          {
            borderBottomColor: isShowLabel
              ? Theme.colors.primary
              : Theme.colors.lineBorder,
          },
        ]}>
        {(isShowLabel || !!value) && (
          <View style={styles.label}>
            <Text style={styles.textLabel}>{label}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          ref={r => inputRef?.(r)}
          returnKeyType="done"
          onFocus={() => {
            _onFocus(true);
            onFocus && onFocus();
          }}
          onBlur={() => {
            _onFocus(false);
            onBlur && onBlur();
          }}
          placeholderTextColor={Theme.colors.lightGreyColor}
          placeholder={label}
          secureTextEntry={isShowPass}
          {...rest}
        />
        {isPassword && (
          <View style={[styles.icon, styles.iconPass]}>
            <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
              <Icon
                name={isShowPass ? 'eye' : 'eye-off-outline'}
                color={Theme.colors.lightGreyColor}
                size={27}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    marginTop: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
  },
  input: {
    color: Theme.colors.notBlack,
    paddingLeft: 8,
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 15,
  },
  textLabel: {
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    color: Theme.colors.primary,
    fontSize: Theme.size.small,
  },
  error: {
    width: '70%',
    color: Theme.colors.error,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.small,
  },
  icon: {
    flex: 0.2,
    alignItems: 'center',
  },
});
