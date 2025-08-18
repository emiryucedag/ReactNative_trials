import { View, Text,StyleSheet} from 'react-native';
import React from 'react';

const ListFooter = () => {
  return (
    <View>
      <Text style={styles.foot}>Foot</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  foot:{
    color: 'red',
    fontSize: 50,
    padding: 20
  }
});

export default ListFooter;