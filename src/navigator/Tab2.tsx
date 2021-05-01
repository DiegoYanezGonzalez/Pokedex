import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import SearchScreen from "../screens/SearchScreen";
import { RootStackParams } from "./Tab1";


const Tabs2 = createStackNavigator<RootStackParams>();

export const Tabs2Screen = () => {
  return (
    <Tabs2.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
    }}
    >
      <Tabs2.Screen name="HomeScreen" component={SearchScreen} />
      <Tabs2.Screen name="PokemonScreen" component={PokemonScreen} />
      
    </Tabs2.Navigator>
  );
}