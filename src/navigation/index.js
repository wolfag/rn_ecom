import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabBarBottom from './components/TabBarBottom';
import {Router} from './router';
import {
  ForgotPassword,
  Login,
  Register,
  Welcome,
} from '@src/features/auth/screens';

const Stack = createStackNavigator();

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const AuthStack = [
  {
    name: Router.Auth.children.Login,
    component: Login,
  },
  {
    name: Router.Auth.children.Register,
    component: Register,
  },
  {
    name: Router.Auth.children.ForgotPassword,
    component: ForgotPassword,
  },
];

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="TabBarBottom" component={TabBarBottom} />
        {AuthStack.map(({name, component}) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{
                transitionSpec: {
                  open: configTabOther,
                  close: configTabOther,
                },
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
