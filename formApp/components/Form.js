import { View, Text,TextInput,StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';


const Form = () => {

    const [form, setForm] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
        email: ""
    });

    const handleChange = (text, input) =>{
         setForm((prev) => ({...prev, [input]: text}) );
    };
    
    const handleSubmit= () => {

        if(form.username=="")
            return false;
        if(form.password=="")
            return false;
        if(form.passwordConfirm=="" || form.password!=form.passwordConfirm)
            return false;
        if(form.email=="")
            return false;

        console.log({form});
    };

  return (
    <View style={styles.container}>
        <Text>
            {
                JSON.stringify(form,null,2)
            }
        </Text>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={form.username}
            placeholder='userName'
            onChangeText={(text) => handleChange(text,"username")}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            value={form.email}
            placeholder='e-mail'
            onChangeText={(text) => handleChange(text,"email")}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={form.password}
            secureTextEntry
            placeholder='password'
            onChangeText={(text) => handleChange(text,"password")}
            />
        </View>
        <View style={styles.item}> 
            <TextInput 
            style={styles.input}
            value={form.passwordConfirm}
            secureTextEntry
            placeholder='password confirm'
            onChangeText={(text) => handleChange(text,"passwordConfirm")}
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