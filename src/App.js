// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import PersonList from './screens/PersonList';
import PersonDetail from './screens/PersonDetail';
import Picture from './screens/Picture';
import UiExamples from './screens/UiExamples';
import LocalNote from './screens/LocalNote';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PersonList" component={PersonList} />
        <Stack.Screen name="PersonDetail" component={PersonDetail} />
        <Stack.Screen name="UiExamples" component={UiExamples} />
        <Stack.Screen name="Picture" component={Picture} />
        <Stack.Screen name="LocalNote" component={LocalNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
