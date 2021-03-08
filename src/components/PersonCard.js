import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import StyleSheets from '../style/Styles';

const PersonCard = (props) => {
  const nav = useNavigation();
  const person = props.person;
  return (
    <TouchableOpacity
      style={StyleSheets.personCard}
      onPress={() => {
        let prm = {personId: person.id};
        nav.push('PersonDetail', prm);
      }}>
      <Image style={StyleSheets.personCardPic} source={{uri: person.avatar}} />
      <View style={StyleSheets.personCardTextContainer}>
        <Text style={StyleSheets.personCardTitle}>{person.first_name}</Text>
        <Text style={StyleSheets.personCardText}>
          {person.first_name} {person.last_name}
        </Text>
        <Text style={StyleSheets.personCardText}>{person.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PersonCard;
