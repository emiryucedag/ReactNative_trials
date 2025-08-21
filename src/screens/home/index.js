import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
export default HomeScreen;