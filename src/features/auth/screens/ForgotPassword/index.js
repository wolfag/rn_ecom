import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Background,
  Logo,
  TextInputField,
  Button,
  Container,
} from '@src/components';
import {Theme} from '@src/common/theme';
import {useNavigation} from '@react-navigation/native';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email is invalid.')
    .required('Email is not empty.'),
});

function ForgotPassword() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isDirty},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const _onSubmit = handleSubmit(data => {
    console.log({data});
  });

  return (
    <Background>
      <Container center>
        <Logo />
        <Text style={styles.title}>Restore Password</Text>

        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputField
              label="Email address"
              returnKeyType="done"
              autoFocus={true}
              blurOnSubmit={false}
              onSubmitEditing={_onSubmit}
              value={value}
              onChangeText={onChange}
              errorText={errors.email?.message}
              autoCapital={false}
              keyboardType="email-address"
              onBlur={onBlur}
            />
          )}
        />

        <Button
          style={{backgroundColor: Theme.colors.primary}}
          onPress={_onSubmit}
          disabled={!isValid}>
          <Text style={[styles.text, styles.loginText]}>
            Send Reset Instructions
          </Text>
        </Button>

        <Button
          style={{backgroundColor: Theme.colors.lightGreyColor}}
          onPress={navigation.goBack}>
          <Text style={styles.text}>Back to Log-in</Text>
        </Button>
      </Container>
    </Background>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    fontSize: Theme.size.large,
    paddingBottom: 20,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 4,
  },
  label: {
    fontFamily: Theme.fontFamily.GilroyLight,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    color: Theme.colors.primary,
  },
  text: {
    fontFamily: Theme.fontFamily.GilroySemiBold,
    color: Theme.colors.secondary,
  },
  loginText: {color: 'white'},
});
