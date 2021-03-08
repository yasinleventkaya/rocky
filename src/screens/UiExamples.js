import React, {useEffect, useState} from 'react';
import {Button, Text, SafeAreaView, FlatList, View} from 'react-native';
import StyleSheets from '../style/Styles';

const UiExamples = () => {
  return (
    <SafeAreaView style={StyleSheets.container}>
      <Text style={StyleSheets.title}>Title</Text>
      <Text style={StyleSheets.text1}>Primary</Text>
      <Text style={StyleSheets.text2}>Secondary</Text>
    </SafeAreaView>
  );
};
export default UiExamples;
