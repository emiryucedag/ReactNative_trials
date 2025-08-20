import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Item = ({item}) => {
    const navigation=useNavigation();
  return (
    <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.navigate("UserDetail",item)}>
            <Text style={style.text}>{item.name}</Text>
        </TouchableOpacity>
    </View>
  );
};

const style=StyleSheet.create({
    container: {
        padding:10,
        backgroundColor: "purple",
        borderWidth:10,
        borderBottomWidth:1
        
    },
    text: {
        fontSize:24,
        color: "orange",
    }
});

export default Item;