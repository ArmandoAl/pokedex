// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './views/start';
import Pokemons from './views/pokemonsView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" options={{headerShown: false}} component={Start} />
        <Stack.Screen name="Pokemons" options={{headerShown: false}} component={Pokemons}  />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;