import { View, Text, StyleSheet , Button} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const UserDetail = ({route}) => {
    const data=route.params;
    const navigation=useNavigation();
    return (
    <View>
      <Text>UserDetail</Text>
      <Text style={styles.stil}>  {JSON.stringify(data,null,2)} </Text>
      <Button
        title='update the title'
        onPress={() =>
            navigation.setOptions({ title: 'Updated!' })
        }
        >
        </Button>
    </View>
  );
};

const styles=StyleSheet.create({
    stil:{
        fontSize:55,
    }
});

export default UserDetail;