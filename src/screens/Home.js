import {useNavigation} from '@react-navigation/core';
import Translation from '../utils/Translate';
import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import StyleSheets from '../style/Styles';

const Home = () => {
  const nav = useNavigation();
  const [refresh, setRefresh] = useState(false);
  return (
    <SafeAreaView style={StyleSheets.container}>
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
    </SafeAreaView>
  );
};
export default Home;
