import React from 'react';
import { ImageComponent, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import {Navigator} from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';



const App = () => {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
     

  )
}

export default App;
