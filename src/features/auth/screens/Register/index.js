import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

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
  fullName: yup.string().required('Full name is not empty.'),
  email: yup
    .string()
    .email('Email is not valid.')
    .required('Email is not empty.'),
  password: yup.string().required('Password is not empty.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password is not match.')
    .required('Confirm password is not empty.'),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    )
    .required('Phone number is not empty.'),
  address: yup.string(),
});

function Register() {
  const navigation = useNavigation();

  const usernameRef = useRef();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

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
        <Text style={styles.title}>Welcome back</Text>
        <KeyboardAwareScrollView
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="always"
          style={{
            width: '100%',
          }}
          getTextInputRefs={() => {
            return [
              usernameRef.current,
              fullNameRef.current,
              emailRef.current,
              passwordRef.current,
              confirmPasswordRef.current,
              phoneRef.current,
              addressRef.current,
            ];
          }}>
          <Controller
            control={control}
            name="username"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Username"
                returnKeyType="next"
                autoFocus={true}
                blurOnSubmit={false}
                inputRef={ref => (usernameRef.current = ref)}
                onSubmitEditing={() => fullNameRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.username?.message}
                autoCapital={false}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="fullName"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Full name"
                returnKeyType="next"
                inputRef={ref => (fullNameRef.current = ref)}
                onSubmitEditing={() => emailRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.fullName?.message}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Email"
                returnKeyType="next"
                inputRef={ref => (emailRef.current = ref)}
                onSubmitEditing={() => passwordRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.email?.message}
                onBlur={onBlur}
                keyboardType="email-address"
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
                returnKeyType="next"
                inputRef={ref => (passwordRef.current = ref)}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.password?.message}
                isPassword
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Confirm Password"
                returnKeyType="next"
                inputRef={ref => (confirmPasswordRef.current = ref)}
                onSubmitEditing={() => phoneRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.confirmPassword?.message}
                isPassword
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Phone"
                returnKeyType="next"
                inputRef={ref => (phoneRef.current = ref)}
                onSubmitEditing={() => addressRef.current.focus()}
                value={value}
                onChangeText={onChange}
                errorText={errors.phone?.message}
                onBlur={onBlur}
                keyboardType="phone-pad"
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputField
                label="Address"
                returnKeyType="done"
                inputRef={ref => (addressRef.current = ref)}
                onSubmitEditing={_onSubmit}
                value={value}
                onChangeText={onChange}
                errorText={errors.address?.message}
                onBlur={onBlur}
              />
            )}
          />
        </KeyboardAwareScrollView>
        <Button
          style={{backgroundColor: Theme.colors.primary}}
          onPress={_onSubmit}
          // disabled={!isValid}
        >
          <Text style={[styles.text, styles.loginText]}>Register</Text>
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.Auth.children.Login)}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </Background>
  );
}

export default Register;

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
