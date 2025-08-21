import { View, Text, StyleSheet , Button} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading';
import axios from 'axios';
import Error from '../../components/Error';

const UserDetail = ({route}) => {
    const {id} = route.params ; 
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);  
    const [userId, setUserId] = useState(id); 
    const [error, setError] = useState(null);
    const navigation= useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Next" onPress={ () => setUserId((c) => c+1 === 11 ? 1 : c+1)}/>
        )
      })
    }
 
    );

    useEffect( () => {
     getData();
    },[userId]);

    const getData = async () => {
      try {
        const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(data);
        setLoading(false);
      }
      catch (err){
        setError(err.message)
      }
    }

    if (loading) {
      return <Loading text={"loading User..."}/>;
    }
    
if (error) {
    return <Error message={error}/>;
  }
    
    return (
    <View>
      <Text style={styles.stil}>  {JSON.stringify(user,null,2)} </Text>    
    </View>
  );
};

const styles=StyleSheet.create({
    stil:{
        fontSize:25,
    }
});

export default UserDetail;