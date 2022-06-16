import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Playlists from './Playlists';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    // @ts-ignore
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Playlists" component={Playlists} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
