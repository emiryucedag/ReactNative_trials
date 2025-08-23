import { View, Text,TextInput,StyleSheet, Button } from 'react-native';
import { Formik, useFormik } from 'formik';


const FormWFormik = () => {

    const {values,handleChange,handleSubmit} = useFormik({
        initialValues:{
            username: "",
            password:"",
            passwordConfirm:"",
            email:"" 
        },
        onSubmit: (values) => {
                console.log(values)}
        
    });

  return (
    <View style={styles.container}>
        
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        value={values.username}
                        placeholder='userName'
                        onChangeText={handleChange("username")}
                        />
                    </View>
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={values.email}
                        placeholder='e-mail'
                        onChangeText={handleChange("email")}
                        />
                    </View>
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        value={values.password}
                        secureTextEntry
                        placeholder='password'
                        onChangeText={handleChange("password")}
                        />
                    </View>  
                    <View style={styles.item}> 
                        <TextInput  
                        style={styles.input}
                        value={values.passwordConfirm}
                        secureTextEntry
                        placeholder='password confirm'
                        onChangeText={handleChange("passwordConfirm")}
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


export default FormWFormik;