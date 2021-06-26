import {Theme} from '@src/common/theme';
import React, {useMemo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import shopActiveIcon from '@src/assets/icons/shop-active.png';
import shopIcon from '@src/assets/icons/shop.png';
import exploreActiveIcon from '@src/assets/icons/explore-active.png';
import exploreIcon from '@src/assets/icons/explore.png';
import heartActiveIcon from '@src/assets/icons/heart-active.png';
import heartIcon from '@src/assets/icons/heart.png';
import cartActiveIcon from '@src/assets/icons/cart-active.png';
import cartIcon from '@src/assets/icons/cart.png';
import userActiveIcon from '@src/assets/icons/user-active.png';
import userIcon from '@src/assets/icons/user.png';
import {Router} from '@src/navigation/router';

export default function TabBarIcon({name, focused, ...rest}) {
  return (
    <View style={styles.root}>
      {name === Router.BottomTabBar.children.Shop && (
        <Image
          style={styles.icon}
          source={focused ? shopActiveIcon : shopIcon}
        />
      )}
      {name === Router.BottomTabBar.children.Explore && (
        <Image
          style={styles.icon}
          source={focused ? exploreActiveIcon : exploreIcon}
        />
      )}
      {name === Router.BottomTabBar.children.Heart && (
        <Image
          style={styles.icon}
          source={focused ? heartActiveIcon : heartIcon}
        />
      )}
      {name === Router.BottomTabBar.children.Cart && (
        <Image
          style={styles.icon}
          source={focused ? cartActiveIcon : cartIcon}
        />
      )}
      {name === Router.BottomTabBar.children.Profile && (
        <Image
          style={styles.icon}
          source={focused ? userActiveIcon : userIcon}
        />
      )}
      {focused && <Text style={styles.text}>{`${name}`.toUpperCase()}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 4,
  },
  text: {
    fontFamily: Theme.fontFamily.RobotoBold,
    fontSize: Theme.size.small,
    color: Theme.colors.active,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  icon: {width: 30, height: 25, resizeMode: 'contain'},
});
