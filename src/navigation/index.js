import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBarBottom from './components/TabBarBottom';
import {Router} from './router';
import {ForgotPassword, Login, Register} from '@src/features/auth/screens';

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
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={Router.BottomTabBar.key} component={TabBarBottom} />
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
  );
}

export default AppNavigation;
