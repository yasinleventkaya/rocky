import React, {useContext, useEffect, useState} from 'react';

import {
  SafeAreaView,
  FlatList,
  Button,
  Text,
  View,
  TextInput,
  Switch,
} from 'react-native';
import {OrderContext} from '../contexts/OrderContext';
import StyleSheets from '../style/Styles';
import Translate from '../utils/Translate';

const OrderList = () => {
  const order = useContext(OrderContext);
  const [inpText, setInpText] = useState('');
  const [swHurryVal, setSwHurryVal] = useState(order.orderIsHurry);
  return (
    <SafeAreaView style={StyleSheets.container}>
      <View style={StyleSheets.paddedContainer}>
        <TextInput
          style={StyleSheets.textInputStandart}
          value={inpText}
          onChangeText={(val) => {
            setInpText(val);
          }}
        />
        <Button
          title={Translate.t('addItem')}
          onPress={() => {
            order.orderItems.push(inpText);
            order.updateOrder(order);
            setInpText('');
          }}
        />
        <View style={StyleSheets.switchContainer}>
          <Text>{Translate.t('isHurry')}</Text>
          <Switch
            value={swHurryVal}
            onValueChange={() => {
              setSwHurryVal(!swHurryVal);
              order.orderIsHurry = !order.orderIsHurry;
              order.updateOrder(order);
            }}
          />
        </View>
        <Button
          title={Translate.t('clearAllItems')}
          onPress={() => {
            order.orderItems = [];
            order.updateOrder(order);
            setInpText('');
          }}
        />
        <FlatList
          style={StyleSheets.container}
          data={order.orderItems}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, id) => id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderList;
