// App.js
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import StackNavigatorRoot from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatorRoot />
    </NavigationContainer>
  );
}