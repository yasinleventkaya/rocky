import React, {PureComponent} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Api from '../service/Api';
import {getUser} from '../service/PersonServices';

const PersonDetail = ({route}) => {
  const {personId} = route.params;
  return (
    <SafeAreaView>
      <Button
        title={'get person detail'}
        onPress={async () => {
          console.log(await getUser(personId));
        }}
      />
    </SafeAreaView>
  );
};

export default PersonDetail;
