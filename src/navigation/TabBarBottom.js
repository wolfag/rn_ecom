import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {HeightScreen, Theme} from '@src/common/theme';
import TabBarIcon from './components/TabBarIcon';

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
        },
        showLabel: false,
        showIcon: true,
      }}>
      <Tab.Screen
        showIcon={true}
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name="Detail"
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="explore" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name="heart"
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="heart" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        showIcon={true}
        name="cart"
        component={DetailScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="cart" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarBottom;
