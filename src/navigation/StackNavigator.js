import * as React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderLogo from '../components/HeaderLogo';
import UserDetail from '../screens/UserDetail';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

// Drawer'dan hangi tab ile başlayacağımızı prop olarak alıyoruz
export default function StackNavigatorRoot({ initialTab = 'HomeTab' }) {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="MainTabs"
        options={{
          title: 'Ana Sayfa',
          headerRight: () => (
            <Button onPress={() => alert('This is a button!')} title="INFO" color="white" />
          ),
          headerTitle: (props) => <HeaderLogo {...props} />,
        }}
      >
        {() => <TabNavigator initialRouteName={initialTab} />}
      </Stack.Screen>

      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}