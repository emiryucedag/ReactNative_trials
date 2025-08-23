import { View, Text,TextInput,StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';


const Form = () => {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [passwordConfirm,setPasswordConfirm]=useState();
    const [email,setEmail]=useState();
    
    const handleSubmit= () => {
        console.log({username, email, password});
    };

  return (
    <View style={styles.container}>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={username}
            placeholder='userName'
            onChangeText={(text) => setUsername(text)}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            value={email}
            placeholder='e-mail'
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={password}
            secureTextEntry
            placeholder='password'
            onChangeText={(text) => setPassword(text)}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={passwordConfirm}
            secureTextEntry
            placeholder='password confirm'
            onChangeText={(text) => setPasswordConfirm(text)}
            />
        </View>
        
        <View style={styles.item}>
            <Button title='register' onPress={handleSubmit}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    padding:10,
    borderWidth:1,
    fontSize:24,
    width:"100%",
    borderColor: "blue"
  },
  container:{
    width:"100%",
    padding:20,
  },
  item:{
    marginBottom:4,
  }
})


export default Form;