import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import StyleSheets from '../style/Styles';
import Translate from '../utils/Translate';

const Settings = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: Translate.t('settings')});
  });
  return (
    <SafeAreaView style={StyleSheets.container}>
      <Button
        title="tr"
        onPress={() => {
          Translate.locale = 'tr-TR';
          route.params.callb();
        }}
      />
      <Button
        title="en"
        onPress={() => {
          Translate.locale = 'en-EN';
          route.params.callb();
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
