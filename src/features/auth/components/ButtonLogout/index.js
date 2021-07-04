import {Theme} from '@src/common/theme';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '@src/components/Button';

function ButtonLogout({onPress}) {
  return (
    <View style={styles.buttonLogOutContainer}>
      <Button
        style={{backgroundColor: Theme.backgrounds.paper}}
        onPress={onPress}>
        <View style={styles.buttonLogOut}>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.colors.primary}
          />
          <Text style={styles.text}>Log Out</Text>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.backgrounds.paper}
          />
        </View>
      </Button>
    </View>
  );
}

export default memo(ButtonLogout);

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonLogOut: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.colors.primary,
  },
});
