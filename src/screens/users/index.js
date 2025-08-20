import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Item from "./Item";

const DATA = [
    {
        id:1,
        name: "Barış"
    },
     {
        id:2,
        name: "Güney"
    },
     {
        id:3,
        name: "Tülay"
    },
];

const UsersScreen= () => {
    const navigation= useNavigation();
  return (
    <FlatList
    data={DATA}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) => <Item item={item}/> }
    />
  );
};

export default UsersScreen;