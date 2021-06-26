import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {HeightScreen, Theme} from '@src/common/theme';
import TabBarIcon from '../TabBarIcon';
import {Profile, Welcome} from '@src/features/auth/screens';
import {Router} from '@src/navigation/router';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function DetailScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  );
}

function TabBarBottom() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        iconStyle: {width: 100},
        style: {
          backgroundColor: Theme.backgrounds.white,
          paddingBottom: 15,
          paddingVertical: 10,
          height: HeightScreen * 0.09,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          position: 'absolute',
          paddingHorizontal: 8,
          shadowOpacity: 0.15,
        },
        showLabel: false,
        showIcon: true,
      }}>
      <Tab.Screen
        showIcon={true}
        name={Router.BottomTabBar.children.Shop}
        component={Welcome}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name={Router.BottomTabBar.children.Shop}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name={Router.BottomTabBar.children.Explore}
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name={Router.BottomTabBar.children.Explore}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name={Router.BottomTabBar.children.Heart}
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name={Router.BottomTabBar.children.Heart}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name={Router.BottomTabBar.children.Cart}
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name={Router.BottomTabBar.children.Cart}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name={Router.BottomTabBar.children.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name={Router.BottomTabBar.children.Profile}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarBottom;
