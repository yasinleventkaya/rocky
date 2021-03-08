import React, {useEffect, useState} from 'react';

import {SafeAreaView, FlatList, Button, ActivityIndicator} from 'react-native';
import StyleSheets from '../style/Styles';
import PersonCard from '../components/PersonCard';
import ListDividerSpace from '../components/ListDividerSpace';
import {getAllUsers} from '../service/PersonServices';

const PersonList = (props) => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      setPersons(await getAllUsers());
      window.setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    getResult();
  }, []);

  return (
    <SafeAreaView style={StyleSheets.container}>
      {isLoading ? (
        <ActivityIndicator style={{alignSelf: 'center', flex: 1}} />
      ) : (
        <FlatList
          style={StyleSheets.personList}
          data={persons}
          renderItem={({item}) => (
            <PersonCard person={item} navigation={props.navigation} />
          )}
          ItemSeparatorComponent={() => <ListDividerSpace />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default PersonList;
