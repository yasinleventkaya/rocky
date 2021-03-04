import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

const MainScreen = () => {
  const [txtVal, onChangeText] = useState('initial text');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#333333'}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          backgroundColor: '#900',
        }}
        onChangeText={(text) => onChangeText(text)}
        value={txtVal}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
