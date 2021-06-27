import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import {Router} from '@src/navigation/router';

const schema = yup.object().shape({
  username: yup.string().required('Username is not empty.'),
  password: yup.string().required('Password is not empty.'),
});

function Login() {
  const navigation = useNavigation();

  const usernameRef = useRef();
  const passwordRef = useRef();

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

  const _googleLogin = () => {};
  console.log({errors});
  return (
    <Background>
      <Container center>
        <Logo />
        <Text style={styles.title}>Welcome back</Text>

        <Controller
          control={control}
          name="username"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputField
              label="Email or Username"
              returnKeyType="next"
              autoFocus={true}
              blurOnSubmit={false}
              inputRef={ref => (usernameRef.current = ref)}
              onSubmitEditing={() => passwordRef.current.focus()}
              value={value}
              onChangeText={onChange}
              errorText={errors.username?.message}
              autoCapital={false}
              keyboardType="email-address"
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputField
              label="Password"
              returnKeyType="done"
              inputRef={ref => (passwordRef.current = ref)}
              onSubmitEditing={_onSubmit}
              value={value}
              onChangeText={onChange}
              errorText={errors.password?.message}
              isPassword
              onBlur={onBlur}
            />
          )}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Router.Auth.children.ForgotPassword)
            }>
            <Text style={styles.label}>Forgot your password</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={{backgroundColor: Theme.colors.primary}}
          onPress={_onSubmit}
          disabled={!isValid}>
          <Text style={[styles.text, styles.loginText]}>Login</Text>
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don`t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.Auth.children.Register)}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
        <Button
          style={{backgroundColor: Theme.colors.lightGreyColor}}
          onPress={_googleLogin}>
          <Text style={styles.text}>Google Sign-In</Text>
        </Button>
      </Container>
    </Background>
  );
}

export default Login;

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
