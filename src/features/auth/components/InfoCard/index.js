import {Theme} from '@src/common/theme';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function InfoCard({icon, name, ...rest}) {
  return (
    <TouchableOpacity
      style={{elevation: 0}}
      onPress={() => {
        // if (name == 'Orders') {
        //   navigation.navigate('Order Detail By Status');
        // } else showToast({title: name, type: 'info', message: name});
        // showToast({title: name, type: 'info', message: name});
      }}>
      <View style={styles.root}>
        <Icon name={icon} size={30} color={Theme.colors.notBlack} />
        <Text style={styles.nameItem}>{name}</Text>
        <Icon name="chevron-forward" size={20} color={Theme.colors.notBlack} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: Theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  nameItem: {
    flex: 1,
    marginLeft: 20,
    fontFamily: Theme.fontFamily.GilroyMedium,
    fontSize: 17,
    color: Theme.colors.notBlack,
  },
});
