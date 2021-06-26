import {Theme} from '@src/common/theme';
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import avatar from '@src/assets/images/wolfag.png';

export default function InfoProfile({data}) {
  return (
    <View style={styles.root}>
      <Image
        source={avatar}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.avatar}
      />
      <View style={styles.info}>
        <View style={styles.nameAndEdit}>
          <Text style={styles.name}>Wolfag</Text>
          <TouchableOpacity
            color={Theme.colors.primary}
            style={styles.buttonEdit}
            onPress={() => {}}>
            <Icon
              name="ios-pencil-outline"
              size={20}
              color={Theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.email}>wolfag@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: Theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
    marginTop: -15,
  },
  nameAndEdit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEdit: {
    borderRadius: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
    color: Theme.colors.notBlack,
  },
  email: {
    color: Theme.colors.notGray,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: 15,
  },
});
