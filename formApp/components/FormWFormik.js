import { View, Text,TextInput,StyleSheet, Button } from 'react-native';
import {  useFormik } from 'formik';
import validationSchema  from './validations';

const FormWFormik = () => {

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues:{
            username: "",
            password:"",
            passwordConfirm:"",
            email:"" 
        },
        onSubmit: (values) => {
                console.log(values)},
        validationSchema
        
    });

  return (
    <View style={styles.container}>
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        value={values.username}
                        placeholder='userName'
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        />
                        {errors.username && touched.username &&<Text style={styles.error}>{errors.username}</Text>}
                    </View>
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={values.email}
                        placeholder='e-mail'
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        />
                        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
                        
                    </View>
                    <View style={styles.item}> 
                        <TextInput 
                        style={styles.input}
                        value={values.password}
                        secureTextEntry
                        placeholder='password'
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        />
                        {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
                        
                    </View>  
                    <View style={styles.item}> 
                        <TextInput  
                        style={styles.input}
                        value={values.passwordConfirm}
                        secureTextEntry
                        placeholder='confirm password'
                        onChangeText={handleChange("passwordConfirm")}
                        onBlur={handleBlur("passwordConfirm")}
                        />
                        {errors.passwordConfirm && touched.passwordConfirm && <Text style={styles.error} >Passwords are not matching!</Text>}

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
  },
  error:{
    color:"red",
  }
})


export default FormWFormik;