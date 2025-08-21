import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const Error = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleErorr}>Error: {message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleErorr:{
    fontSize:20,
    color:"black",
    padding:10,
    backgroundColor:"orange"
  },
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
})


export default Error;