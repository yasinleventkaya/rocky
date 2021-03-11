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
import Settings from './screens/Settings';
import {MoodContextProvider} from './contexts/MoodContextProvider';
import {OrderContextProvider} from './contexts/OrderContext';
import OrderList from './screens/OrderList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <MoodContextProvider>
      <OrderContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PersonList" component={PersonList} />
            <Stack.Screen name="PersonDetail" component={PersonDetail} />
            <Stack.Screen name="OrderList" component={OrderList} />
            <Stack.Screen name="UiExamples" component={UiExamples} />
            <Stack.Screen name="Picture" component={Picture} />
            <Stack.Screen name="LocalNote" component={LocalNote} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderContextProvider>
    </MoodContextProvider>
  );
};

export default App;
