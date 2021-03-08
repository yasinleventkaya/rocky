import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, Image} from 'react-native';
import Constants from '../constants/Constants';
import StyleSheets from '../style/Styles';

const Picture = (props) => {
  return (
    <SafeAreaView style={StyleSheets.centeredContainer}>
      <Image
        source={require('./../assets/bmw-logo.png')}
        style={StyleSheets.mediumImg}
      />
      <Image
        source={{uri: Constants.REMOTE_URL_DICE}}
        style={StyleSheets.mediumImg}
      />
      <Image
        source={{uri: Constants.REMOTE_URL_ACES}}
        style={StyleSheets.mediumImg}
      />
    </SafeAreaView>
  );
};
export default Picture;
