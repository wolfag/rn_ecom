import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Container} from '@src/components';
import {InfoCard, InfoProfile} from '../../components';
import ButtonLogout from '../../components/ButtonLogout';
const InfoCards = [
  {icon: 'basket-outline', name: 'Orders'},
  {icon: 'newspaper-outline', name: 'My Details'},
  {icon: 'ios-location-outline', name: 'Delivery Address'},
  {icon: 'ios-card-outline', name: 'Payment Methods'},
  {icon: 'ios-barcode-outline', name: 'Promo Card'},
  {icon: 'notifications-outline', name: 'Notifications'},
  {icon: 'ios-help-circle-outline', name: 'Help'},
  {icon: 'ios-alert-circle-outline', name: 'About'},
];

export default function Profile() {
  return (
    <Container>
      <FlatList
        data={InfoCards}
        renderItem={({item}) => <InfoCard {...item} />}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={InfoProfile}
        ListFooterComponent={ButtonLogout}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
});
