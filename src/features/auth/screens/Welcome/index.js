import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Button from '@src/components/Button';
import {Theme} from '@src/common/theme';
import Background from '@src/components/Background';
import Logo from '@src/components/Logo';
import {Router} from '@src/navigation/router';

function Welcome() {
  // const {isRegister} = useSelector(state => state.auth);
  // const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Background>
      <Logo />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <Button
        style={{backgroundColor: Theme.colors.primary}}
        onPress={() => navigation.navigate(Router.Auth.children.Login)}>
        <Text style={styles.text}>Login</Text>
      </Button>
      <Button
        style={{backgroundColor: Theme.backgrounds.paper}}
        onPress={() => navigation.navigate(Router.Auth.children.Register)}>
        <Text style={[styles.text, {color: Theme.colors.primary}]}>
          Register
        </Text>
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    fontSize: 15,
    color: Theme.backgrounds.white,
  },
  title: {
    textAlign: 'center',
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    fontSize: Theme.size.large,
    paddingBottom: 20,
  },
});

export default Welcome;
