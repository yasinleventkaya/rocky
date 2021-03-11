import {useNavigation} from '@react-navigation/core';
import Translation from '../utils/Translate';
import React, {useContext, useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import StyleSheets from '../style/Styles';
import {OrderContext} from '../contexts/OrderContext';
import Translate from '../utils/Translate';

const Home = () => {
  const nav = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const order = useContext(OrderContext);
  return (
    <SafeAreaView style={StyleSheets.container}>
      <Button
        title={Translation.t('orderList')}
        onPress={() => {
          nav.push('OrderList');
        }}
      />
      <Button
        title={Translation.t('personList')}
        onPress={() => {
          nav.push('PersonList');
        }}
      />
      <Button
        title={Translation.t('pictures')}
        onPress={() => {
          nav.push('Picture');
        }}
      />
      <Button
        title={Translation.t('uiExamples')}
        onPress={() => {
          nav.push('UiExamples');
        }}
      />
      <Button
        title={Translation.t('localNote')}
        onPress={() => {
          nav.push('LocalNote');
        }}
      />
      <Button
        title={Translation.t('settings')}
        onPress={() => {
          nav.push('Settings', {
            callb: () => {
              setRefresh(!refresh);
              nav.pop();
            },
          });
        }}
      />
      <View style={StyleSheets.container} />
      <Text
        style={
          order.orderIsHurry
            ? StyleSheets.orderStripTextHurry
            : StyleSheets.orderStripTextNotHurry
        }>
        {Translate.t('orderItemsCount') + order.orderItems.length}
      </Text>
    </SafeAreaView>
  );
};
export default Home;
