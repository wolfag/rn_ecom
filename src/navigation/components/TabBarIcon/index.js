import {Theme} from '@src/common/theme';
import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function TabBarIcon({name, focused, ...rest}) {
  const iconProps = useMemo(() => {
    return {
      size: 30,
      color: focused ? Theme.colors.primary : Theme.colors.secondary,
    };
  }, [focused]);

  return (
    <View style={styles.root}>
      {name === 'home' && <AntDesign name="home" {...iconProps} />}
      {name === 'explore' && <Feather name="compass" {...iconProps} />}
      {name === 'heart' && <AntDesign name="heart" {...iconProps} />}
      {name === 'cart' && <Feather name="shopping-bag" {...iconProps} />}
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
    color: Theme.colors.secondary,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
