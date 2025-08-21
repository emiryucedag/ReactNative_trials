import { View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ListHeader = () => {
  return (
    <View>
      <Text style={styles.head}> Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  head:{
    color: 'red',
    fontSize: 50,
    padding: 20
  }
});

export default ListHeader;