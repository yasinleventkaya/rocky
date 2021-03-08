import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import StyleSheets from '../style/Styles';

const Home = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={[StyleSheets.container, {justifyContent: 'center'}]}>
      <Button
        title="Go Person List"
        onPress={() => {
          nav.push('PersonList');
        }}
      />
      <Button
        title="Go Pictures"
        onPress={() => {
          nav.push('Picture');
        }}
      />
      <Button
        title="Go Ui Examples"
        onPress={() => {
          nav.push('UiExamples');
        }}
      />
    </SafeAreaView>
  );
};
export default Home;
