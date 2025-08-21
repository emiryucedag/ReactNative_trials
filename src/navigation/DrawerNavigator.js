import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigatorRoot from './StackNavigator';

const Drawer = createDrawerNavigator();

function HomeEntry() {
  return <StackNavigatorRoot key="home-stack" initialTab="HomeTab" />;
}
function UsersEntry() {
  return <StackNavigatorRoot key="users-stack" initialTab="UsersTab" />;
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeEntry} />
      <Drawer.Screen name="Users" component={UsersEntry} />
    </Drawer.Navigator>
  );
}