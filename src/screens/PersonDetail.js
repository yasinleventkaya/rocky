import React, {useContext} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {MoodContext} from '../contexts/MoodContextProvider';
import {getUser} from '../service/PersonServices';

const PersonDetail = ({route}) => {
  const {personId} = route.params;
  const {moodText, moodEmoji, moodColor, moodLevel, updateMood} = useContext(
    MoodContext,
  );
  return (
    <SafeAreaView>
      <View>
        <Button
          title={'make happy'}
          onPress={() => {
            updateMood({
              moodText: 'HAPPY',
              moodEmoji: ':)))',
              moodColor: 'green',
              moodLevel: 85,
            });
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, color: moodColor}}>{moodText}</Text>
          <Text style={{fontSize: 22, color: moodColor}}>{moodEmoji}</Text>
          <Text style={{fontSize: 22, color: moodColor}}>{moodLevel}</Text>
        </View>
        <Button
          title={'make sad'}
          onPress={() => {
            updateMood({
              moodText: 'SAD',
              moodEmoji: ':(((',
              moodColor: 'crimson',
              moodLevel: 25,
            });
          }}
        />
      </View>
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
