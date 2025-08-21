import React, { useEffect,useState } from "react";
import { Button, FlatList, Text, View ,StyleSheet,SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Item from "./Item";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import axios from "axios";

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

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
      getData();
        }, []);

        const getData = async () => {
          try{
            const {data} = await axios("https://jsonplaceholder.typicode.com/users");
            setUsers(data);
            setLoading(false);
          }
          catch (err) {
            setError(err.message);
          }
        };
  
  if (loading) {
    return <Loading text={"loading..."}/>;
  }

  if (error) {
    return <Error message={error}/>;
  }

  return (
    <View style={{flex:1}}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item id={item.id} name={item.name}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
});

export default UsersScreen;