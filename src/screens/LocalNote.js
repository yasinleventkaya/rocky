import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {getData, storeStringData} from '../service/AsyncStorageService';
import StyleSheets from '../style/Styles';

const LocalNote = () => {
  return (
    <SafeAreaView style={StyleSheets.centeredContainer}>
      <Text>Local</Text>
      <Button
        title={'set'}
        onPress={async () => {
          await storeStringData('cardigans', 'carnival');
        }}
      />
      <Button
        title={'get'}
        onPress={async () => {
          console.log(await getData('cardigans'));
        }}
      />
    </SafeAreaView>
  );
};

export default LocalNote;
