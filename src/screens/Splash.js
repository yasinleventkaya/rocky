import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#aa88ff'}}>
      <Text
        onPress={() => {
          navigation.push('Main');
        }}>
        asd
      </Text>
    </SafeAreaView>
  );
};

export default Splash;
